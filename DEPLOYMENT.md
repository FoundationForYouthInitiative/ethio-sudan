# Deployment Guide - FYI Landing Page

## 🚀 GitHub Pages Deployment (Recommended)

This is the easiest way to deploy your FYI landing page for free.

### Setup Steps:

1. **Create GitHub Repository:**
   ```bash
   # Create a new repository on GitHub (e.g., "fyi-landing-page")
   # Clone this code to your repository
   git clone <your-new-repo-url>
   cd fyi-landing-page
   
   # Copy all files from this package to your repository
   # Commit and push to main branch
   git add .
   git commit -m "Initial commit: FYI landing page"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Click "Save"

3. **Update Repository URL:**
   Edit these files with your actual GitHub username and repository name:
   
   **In `package.json`:**
   ```json
   "repository": {
     "url": "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
   },
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```
   
   **In `vite.config.ts`:**
   ```typescript
   base: command === 'build' ? '/YOUR_REPO_NAME/' : '/',
   ```

4. **Deploy:**
   - Push any changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Automatic Deployments:
- Every push to `main` branch triggers automatic deployment
- Check the "Actions" tab in your repository to monitor deployments
- Deployments typically take 2-5 minutes

## 🌐 Alternative Deployment Options

### Netlify
1. **Connect Repository:**
   - Sign up at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy:**
   - Click "Deploy site"
   - Get your custom Netlify URL
   - Optional: Set up custom domain

### Vercel
1. **Import Repository:**
   - Sign up at [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure:**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy:**
   - Click "Deploy"
   - Get your Vercel URL
   - Optional: Set up custom domain

### Custom Server/Hosting
1. **Build Locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload Files:**
   - Upload contents of `dist/` folder to your web server
   - Point your domain to the uploaded files
   - Ensure server serves `index.html` for all routes

3. **Server Configuration:**
   **Apache (.htaccess):**
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```
   
   **Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## 🔧 Customization for Your Domain

### Update Base Path for Custom Domain:
If using a custom domain (not GitHub Pages), update `vite.config.ts`:

```typescript
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: '/', // Use root path for custom domains
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
```

### Environment-Specific Configuration:
Create `.env` files for different environments:

**.env.production:**
```
VITE_CONTACT_EMAIL=partnerships@fyi-africa.org
VITE_API_URL=https://api.fyi-africa.org
```

**.env.development:**
```
VITE_CONTACT_EMAIL=test@example.com
VITE_API_URL=http://localhost:3000
```

## 📊 Monitoring & Analytics

### Add Google Analytics:
1. Get your GA4 tracking ID
2. Add to `index.html` in the `<head>` section:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Performance Monitoring:
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance audits
- Monitor with [Web Vitals](https://web.dev/vitals/)
- Set up [GitHub Codespaces](https://github.com/features/codespaces) for easy development

## 🆘 Troubleshooting

### Common Issues:

**1. Images not loading:**
- Ensure all images are in `public/images/` directory
- Check image file names match exactly (case-sensitive)
- Verify image formats are supported (jpg, png, webp)

**2. GitHub Pages 404 error:**
- Check repository name in `vite.config.ts` base path
- Ensure GitHub Actions completed successfully
- Verify GitHub Pages is enabled in repository settings

**3. Contact form not working:**
- Update email addresses in the contact form component
- Consider implementing a backend service for form handling
- Test mailto functionality on different devices/browsers

**4. Build failures:**
- Check Node.js version (required: 18+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Review error messages in GitHub Actions logs

### Getting Help:
- Create an issue in your repository
- Include error messages and steps to reproduce
- Specify browser version and operating system
- Provide link to your deployed site if applicable

---

**Need help with deployment? Contact the FYI team:**
- Email: partnerships@fyi-africa.org
- Phone: +251 911 391 731 | +251 913 278 065
