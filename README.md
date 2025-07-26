# Global Trade Import & Export Website

A modern, responsive e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS for cross-border import and export trading.

## 🌟 Features

- **Modern Design**: Professional, responsive layout with modern UI components
- **Bilingual Support**: Full English and Chinese content support
- **Product Management**: Complete product catalog with search and filtering
- **Image Support**: WebP format support with fallback handling
- **Admin Panel**: Product management interface (backend integration ready)
- **Contact Forms**: Professional contact forms with validation
- **SEO Optimized**: Built with SEO best practices

## 🖼️ Image Support

### WebP Format Support
The website is optimized for WebP images with automatic fallback handling:

- **Product Images**: `/images/products/product-1-bluetooth-speaker.webp`
- **Category Images**: `/images/categories/electronics.webp`
- **Company Logo**: `/images/logo.svg`
- **Fallback Images**: Automatic fallback to SVG placeholders

### Image Structure
```
public/
├── images/
│   ├── products/          # Product images (WebP format)
│   │   ├── product-1-bluetooth-speaker.webp
│   │   ├── product-2-wireless-charger.webp
│   │   └── ...
│   ├── categories/        # Category images (WebP format)
│   │   ├── electronics.webp
│   │   ├── home-garden.webp
│   │   └── ...
│   ├── logo.svg          # Company logo
│   └── placeholder.svg   # Fallback placeholder
```

### Adding Your Images
1. **Convert to WebP**: Use tools like Squoosh, TinyPNG, or ImageMagick
2. **Optimize size**: Keep product images under 200KB
3. **Use proper naming**: `product-{id}-{name}.webp`
4. **Place in correct directory**: `/public/images/products/`
5. **Update data**: Modify `src/lib/client-data.ts` with correct paths

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd shop-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access the Website
- **Homepage**: http://localhost:3001
- **Products**: http://localhost:3001/products
- **About**: http://localhost:3001/about
- **Contact**: http://localhost:3001/contact
- **Admin**: http://localhost:3001/admin

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── products/         # Product pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── admin/            # Admin panel
├── components/           # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── ProductCard.tsx   # Product display card
│   └── ImageWithFallback.tsx # Image component with fallback
├── lib/                  # Data and utilities
│   └── client-data.ts    # Static data (replace with backend)
└── types/                # TypeScript type definitions
    └── product.ts        # Product and company types
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: WebP with SVG fallbacks
- **Icons**: Emoji and SVG icons
- **Deployment**: Vercel ready

## 📊 Data Management

### Current Setup
- Static data in `src/lib/client-data.ts`
- No database required for initial setup
- Easy to replace with backend API

### Adding Products
1. Edit `src/lib/client-data.ts`
2. Add product data with WebP image paths
3. Include both Chinese and English content
4. Update categories if needed

### Admin Panel
- Product listing and management
- Add/Edit/Delete products (backend integration required)
- Form validation and error handling

## 🎨 Customization

### Colors and Branding
- Primary color: Blue (#3B82F6)
- Secondary color: Gray (#6B7280)
- Customize in `tailwind.config.js`

### Content
- Update company information in `src/lib/client-data.ts`
- Modify text content in respective page components
- Add new pages in `src/app/` directory

### Styling
- All styling uses Tailwind CSS classes
- Responsive design with mobile-first approach
- Easy to customize with Tailwind utilities

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones
- **Tablet**: Responsive layout for tablets
- **Desktop**: Full-featured desktop experience
- **Navigation**: Collapsible mobile menu

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support
4. CDN for fast image loading

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 Performance

### Optimizations
- WebP image format for smaller file sizes
- Lazy loading for images
- Component-based code splitting
- Optimized bundle size

### Best Practices
- Semantic HTML structure
- Accessibility features
- SEO meta tags
- Fast loading times

## 🔒 Security

- No sensitive data in client-side code
- Form validation and sanitization
- Secure image handling
- HTTPS ready

## 📞 Support

For questions or issues:
1. Check the `IMAGE_GUIDE.md` for image-related help
2. Review the code comments for implementation details
3. Open an issue in the repository

## 📄 License

This project is licensed under the MIT License.

---

**Note**: This is a frontend-only implementation. For production use, integrate with a backend API for data persistence and user management.
