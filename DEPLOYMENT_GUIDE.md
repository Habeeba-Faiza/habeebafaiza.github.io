# Deployment Guide

## 🚀 Deployment Options

This Next.js website can be deployed to multiple platforms. Below are detailed instructions for each option.

## Option 1: Vercel Deployment (Recommended)

Vercel is the platform created by the makers of Next.js and provides optimal performance.

### Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Habeeba-Faiza/habeeba-faiza.github.io.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add custom domain
   - Update DNS records as instructed

### Environment Variables

If you add any environment variables later:
- Go to Project Settings > Environment Variables
- Add variables for Production, Preview, and Development

## Option 2: GitHub Pages Deployment

Since the project is configured for static export, it can be deployed to GitHub Pages.

### Setup

1. **Update Repository**
   
   Ensure your `next.config.js` has:
   ```javascript
   output: 'export',
   images: { unoptimized: true },
   ```

2. **Build Static Files**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**

   **Option A: Using gh-pages branch**
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

   **Option B: Manual deployment**
   - Build creates `out/` directory
   - Push contents to `gh-pages` branch
   - Enable GitHub Pages in repository settings

4. **Configure GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select `gh-pages` branch
   - Save

5. **Access Website**
   - URL: `https://habeeba-faiza.github.io`
   - Custom domain can be added in settings

### GitHub Actions Deployment (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Option 3: Netlify Deployment

1. **Push to GitHub** (same as Vercel)

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" > "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy"

3. **Custom Domain**
   - Go to Site settings > Domain management
   - Add custom domain
   - Configure DNS

## Option 4: AWS S3 + CloudFront

For enterprise deployment:

1. **Build Static Site**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate
   - Set up domain

## 🔧 Pre-Deployment Checklist

- [ ] Update all placeholder content
- [ ] Add real LinkedIn profile URL
- [ ] Update email address
- [ ] Test responsive design
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test on multiple browsers
- [ ] Run accessibility audit
- [ ] Check SEO metadata
- [ ] Test mobile performance

## 🛠️ Build Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production Build
npm run build        # Creates optimized production build

# Start Production Server (if not using static export)
npm run start        # Runs production server

# Linting
npm run lint         # Check for code issues
```

## 📊 Post-Deployment

### Analytics Setup

1. **Google Analytics**
   - Create GA4 property
   - Add tracking code to `app/layout.tsx`

2. **Vercel Analytics** (if using Vercel)
   - Enable in project settings
   - Automatic performance tracking

### Performance Monitoring

- Use Vercel Analytics or Lighthouse
- Monitor Core Web Vitals
- Check mobile performance
- Monitor loading times

### SEO Verification

1. **Google Search Console**
   - Add property
   - Verify ownership
   - Submit sitemap

2. **SEO Checklist**
   - Verify metadata appears correctly
   - Check social media previews
   - Test rich snippets
   - Monitor indexing

## 🔄 Continuous Deployment

### Vercel
- Automatic deployments on push to main
- Preview deployments for pull requests
- Instant rollbacks available

### GitHub Pages
- Use GitHub Actions (see workflow above)
- Automatic deployment on push

### Update Process
```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel/Netlify deploys automatically
# GitHub Pages deploys via Actions
```

## 🐛 Troubleshooting

### Build Fails
- Check Node version (18+)
- Clear node_modules and reinstall
- Check for TypeScript errors

### Images Not Loading
- Verify `unoptimized: true` in next.config.js
- Check image paths are correct
- Ensure images are in public/ directory

### 404 Errors
- Verify routing configuration
- Check base path settings
- Ensure all pages exist

### CSS Not Applied
- Clear browser cache
- Check Tailwind purge settings
- Verify CSS imports

## 📈 Domain Setup

### Custom Domain Configuration

1. **Purchase Domain** (Namecheap, Google Domains, etc.)

2. **Configure DNS**
   
   For Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   For GitHub Pages:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
         185.199.109.153
         185.199.110.153
         185.199.111.153

   Type: CNAME
   Name: www
   Value: habeeba-faiza.github.io
   ```

3. **SSL Certificate**
   - Automatically handled by Vercel/Netlify
   - GitHub Pages: Enable HTTPS in settings

## 🎯 Performance Optimization

After deployment:

- Enable CDN
- Configure caching headers
- Optimize images
- Minify assets
- Enable compression
- Use performance monitoring

---

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub: [docs.github.com/pages](https://docs.github.com/pages)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
