#!/usr/bin/env bash
set -euo pipefail

echo "== Google Sheets direct append via Service Account =="
command -v openssl >/dev/null || { echo "ERROR: openssl 未安装"; exit 1; }
command -v curl >/dev/null || { echo "ERROR: curl 未安装"; exit 1; }

# 可选：设置代理（按需手动取消注释）
# export https_proxy="http://127.0.0.1:7890"; export http_proxy="$https_proxy"; export all_proxy="socks5://127.0.0.1:7890"

# 统一 curl 选项（详细日志/超时/重试）
CURL_OPTS=( -sS -v --http1.1 --max-time 45 --connect-timeout 10 --retry 2 --retry-delay 1 )

# 1) 基本配置
SA_EMAIL='fatwithhair@nextjs-contact-form-468707.iam.gserviceaccount.com'
SHEETS_ID='1BixEACW-xnKQY8-1R8ek6VT0np4VIuB0K0yLvfyjDVA'
SHEET_RANGE='Sheet1!A:F'   # 如你的工作表名不是 Sheet1，请改这里

# 2) 写入你的私钥到文件（权限 600）
PRIV_KEY_FILE='sa.key'
cat > "$PRIV_KEY_FILE" <<'PEM'
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCsgUwDZPo7Y9d7
XCmq/80gGR64fd+cmtkOZwMGsOkYL5MMnpEArVGlPgem/G9wdw++Jzfot6y7/Z+P
K/e8gVJfETmEN1yZW2z6U3RoawQlaLe/p98qe0k7cfmzUTpTRlRco2jSth4Dewmr
BxO8yqJRxdNP1TTLF6iF6NMYSlbw5jT8ILRn6wHMHL4v+KAbrsa5HmVuJkuCRLJF
YC8+c10pGuHxcki7sG+uQlzisJn1DjPxqwc56ObyXKzA1taGkkUeVrHVEmMUQ3s7
lx4Q7JUty6uDe6bzCMZPVnXw5ZHVGFAqByfStfZIVY3UXsl1kTE/ae4vpFAIdKjO
heFY7KPHAgMBAAECggEAJAyLFYSDFGkrbTCX1o/JToVhWZ2YXrIvXOajB8FtnKvI
d5ElbTZLAxSg5cEICsEezZaFhQDpPInmT7WY+lAuJgbD9cDZ/YRRFEjfYTjH74dg
KtGKfeawqZcKXvJBFYjzdT6C19HOGN0b6p06fy/7VspX++1qsGxbv8wlXQSgAYxK
OoTgb7jM3EL+UqknVF2k0u7cVTpVWKRxGgNoZTz7mKiXiL1vnTQsI9+6qEtvy+TR
vn4Ba9H885tOqc7/5AkHIUGxtxt3f8C3bfq/00/PVGAC5GD9tQGM2w+L91PXcPyD
Wr+g+cpMuLeKPgtJggGOdmhWfExVScKUZ5AmQAlFsQKBgQDWJDn/2dgNN2Q2DhTB
wilYqFpWKo02Hv6mUhSp8ylAuYwF4aSy0vxQMGrj0oDM4HWaN/eCOgJQa9X1mSgO
xnB4br7B+pOsAIPxmHU8ZKRBhiuAvQEj5sYdYYSPxN+901iy2osAgNcykkku/b49
Wpz8rES9FUKDhhHFuaZ3TwZDNwKBgQDOOY6XO/uF6YVjXJ8lh40qPTjTRQGSa7xf
oI2xahshktFHbIbRwlBMw20V01UP+7bqscotGjsBrVrGMztEhVF9Y1KuviBFPLLt
Ie2TKg9vKDGuchqU4WAhffeZ1ce8m3l+UFX2CgVyq6Qko3ATxxSb6AVx6nyJWwg8
XMywI/wL8QKBgFKDkQnCQlsNXgLqOBtVGqN785tCODmDhfJGrIm0FdBH7umRQepa
HDk1/uocgd7wGsC7EhdPDPc6Ji7Fvka7NjlhywVp7Z8Yb78XVQ1ZZmWNMpQfwCG6
WdqWagMQBHrbxlDcnzUpcEKfVa3SvoxbryQ5qR8G4yNU9OIwoDFW9P3PAoGARTyX
vfi6enwrd2+aUuxOnbbOREgvvewD44sw5za7gysarkMmhHgbo5odHq3EKkiVYfhs
63WaB/ceudprdJbaBCH7mYVlqjk1zV2NuNHvOp+hBnNyrzd3oeb74R8gHxeH07u/
EIrOx3AO/OoOb+Vv6uQcJ+HVC/yPKEzzv9NlBNECgYBPuUxM9vgVK1xiO4e5BWd5
qqM5RYD/WmPfqrl3Eyf3VPu9PcEtxsGqZUc9uu+6uxFmxTXOY8Ws88tWuOXdX+CX
wUdQuV9kjhKxHdZ0tJRj3B6QusLRT6OxmkbocuWeWXQ3tNpv9/AZTmwy+vFtUCb0
Wg0tcHcreZ1DZ7MyP3qdkA==
-----END PRIVATE KEY-----
PEM
chmod 600 "$PRIV_KEY_FILE"
echo "[1/4] Private key written to $PRIV_KEY_FILE (600)"

# 3) base64url 编码函数
b64url() { openssl base64 -e -A | tr '+/' '-_' | tr -d '='; }

# 4) 生成 JWT 断言
HEADER='{"alg":"RS256","typ":"JWT"}'
HEADER_B64="$(printf '%s' "$HEADER" | b64url)"
NOW="$(date +%s)"
EXP="$((NOW + 3600))"
CLAIMS="$(cat <<JSON
{"iss":"$SA_EMAIL","scope":"https://www.googleapis.com/auth/spreadsheets","aud":"https://oauth2.googleapis.com/token","exp":$EXP,"iat":$NOW}
JSON
)"
CLAIMS_B64="$(printf '%s' "$CLAIMS" | b64url)"
SIGNING_INPUT="${HEADER_B64}.${CLAIMS_B64}"
SIGNATURE="$(printf '%s' "$SIGNING_INPUT" \
  | openssl dgst -sha256 -sign "$PRIV_KEY_FILE" -binary \
  | openssl base64 -A | tr '+/' '-_' | tr -d '=')"
ASSERTION="${SIGNING_INPUT}.${SIGNATURE}"
echo "[2/4] JWT assertion ready (iat=$NOW, exp=$EXP)"

# 5) 用 JWT 换取 access_token
echo "[3/4] Requesting access_token..."
echo "DNS: oauth2.googleapis.com =>"; (command -v dig >/dev/null && dig +short oauth2.googleapis.com) || true
echo "Connectivity: https://www.google.com/generate_204"; curl -sS -I https://www.google.com/generate_204 || true
TOKEN_JSON="$(curl "${CURL_OPTS[@]}" -X POST https://oauth2.googleapis.com/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${ASSERTION}" || true)"
echo "Token Response: $TOKEN_JSON"
if command -v jq >/dev/null 2>&1; then
  ACCESS_TOKEN="$(echo "$TOKEN_JSON" | jq -r .access_token)"
else
  ACCESS_TOKEN="$(echo "$TOKEN_JSON" | sed -n 's/.*"access_token":"\([^"\\]*\)".*/\1/p')"
fi
[ -n "${ACCESS_TOKEN:-}" ] || { echo "ERROR: 未拿到 access_token"; exit 1; }
echo "[3/4] access_token acquired (length=${#ACCESS_TOKEN})"

# 6) 调用 Sheets 追加一行
APPEND_URL="https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}/values/${SHEET_RANGE}:append?valueInputOption=RAW"
NOW_ISO="$(date -Iseconds)"
BODY="$(cat <<JSON
{"values":[["$NOW_ISO","fatwithhair","fatwithhair@gmail.com","fatwithhair","test from curl","","curl UA"]]}
JSON
)"
echo "[4/4] POST $APPEND_URL"
curl "${CURL_OPTS[@]}" -D /tmp/resp.headers -o /tmp/resp.body -w "\nHTTP_CODE=%{http_code}\n" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -X POST "$APPEND_URL" \
  -d "$BODY"
echo "--- Response headers ---"
cat /tmp/resp.headers
echo "--- Response body ---"
cat /tmp/resp.body


