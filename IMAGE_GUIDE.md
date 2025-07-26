# 图片管理指南 / Image Management Guide

## 支持的图片格式 / Supported Image Formats

### WebP 格式 (推荐) / WebP Format (Recommended)
- **优点**: 文件小、加载快、质量高
- **建议尺寸**: 
  - 产品图片: 800x600px 或 1200x900px
  - Logo: 200x80px
  - 分类图片: 400x300px

### 其他格式 / Other Formats
- **SVG**: 适用于Logo和图标
- **PNG**: 适用于需要透明背景的图片
- **JPG**: 适用于照片类图片

## 图片文件结构 / Image File Structure

```
public/
├── images/
│   ├── products/          # 产品图片
│   │   ├── product-1.webp
│   │   ├── product-2.webp
│   │   └── ...
│   ├── categories/        # 分类图片
│   │   ├── electronics.webp
│   │   ├── home-garden.webp
│   │   └── ...
│   ├── logo.svg          # 公司Logo
│   └── placeholder.svg   # 占位图片
```

## 图片命名规范 / Image Naming Convention

### 产品图片 / Product Images
- 格式: `product-{id}-{name}.webp`
- 示例: `product-1-bluetooth-speaker.webp`

### 分类图片 / Category Images
- 格式: `category-{name}.webp`
- 示例: `category-electronics.webp`

## 图片优化建议 / Image Optimization Tips

### 1. 文件大小优化 / File Size Optimization
- 产品图片: 建议小于 200KB
- Logo: 建议小于 50KB
- 使用 WebP 格式可减少 25-35% 的文件大小

### 2. 尺寸优化 / Size Optimization
- 产品列表图片: 400x300px
- 产品详情图片: 800x600px
- 响应式图片: 提供多个尺寸版本

### 3. 质量设置 / Quality Settings
- WebP: 质量设置为 80-85
- JPG: 质量设置为 85-90

## 代码中的图片使用 / Image Usage in Code

### 1. 使用 ImageWithFallback 组件
```tsx
import ImageWithFallback from '@/components/ImageWithFallback';

<ImageWithFallback
  src="/images/products/product-1.webp"
  alt="Product Name"
  className="w-full h-48 object-cover"
  fallbackSrc="/images/placeholder.svg"
/>
```

### 2. 支持多种格式
```tsx
// 支持 WebP 和 JPG 格式
const imageSrc = {
  webp: "/images/products/product-1.webp",
  jpg: "/images/products/product-1.jpg"
};
```

## 图片上传流程 / Image Upload Process

### 1. 准备图片
- 确保图片格式为 WebP
- 优化图片尺寸和文件大小
- 使用有意义的文件名

### 2. 上传到服务器
- 将图片文件上传到 `public/images/` 目录
- 按类别组织图片文件
- 更新产品数据中的图片路径

### 3. 更新代码
- 在 `src/lib/client-data.ts` 中更新图片路径
- 确保图片路径正确且可访问

## 故障排除 / Troubleshooting

### 图片不显示
1. 检查文件路径是否正确
2. 确认文件格式是否支持
3. 检查文件权限
4. 使用浏览器开发者工具查看网络请求

### 图片加载慢
1. 优化图片文件大小
2. 使用 WebP 格式
3. 启用图片懒加载
4. 使用 CDN 加速

### 图片质量差
1. 检查原始图片质量
2. 调整压缩参数
3. 使用更高分辨率的图片

## 工具推荐 / Recommended Tools

### 图片转换工具
- **Squoosh**: Google 的在线图片优化工具
- **TinyPNG**: 在线图片压缩工具
- **ImageMagick**: 命令行图片处理工具

### 图片编辑工具
- **GIMP**: 免费图片编辑软件
- **Photoshop**: 专业图片编辑软件
- **Canva**: 在线设计工具

## 最佳实践 / Best Practices

1. **始终提供 alt 文本**: 提高可访问性和SEO
2. **使用响应式图片**: 适配不同设备
3. **实现懒加载**: 提高页面加载速度
4. **提供占位图片**: 改善用户体验
5. **定期优化图片**: 保持网站性能
6. **备份原始图片**: 便于后续编辑

## 示例代码 / Example Code

### 产品图片组件
```tsx
interface ProductImageProps {
  product: Product;
  size?: 'small' | 'medium' | 'large';
}

export function ProductImage({ product, size = 'medium' }: ProductImageProps) {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-48 h-48',
    large: 'w-96 h-96'
  };

  return (
    <ImageWithFallback
      src={product.image}
      alt={product.nameEn}
      className={`object-cover rounded-lg ${sizeClasses[size]}`}
      fallbackSrc="/images/placeholder.svg"
    />
  );
}
```

### 图片上传组件
```tsx
interface ImageUploadProps {
  onUpload: (file: File) => void;
  accept?: string;
}

export function ImageUpload({ onUpload, accept = '.webp,.jpg,.png' }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <input
      type="file"
      accept={accept}
      onChange={handleFileChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  );
}
``` 