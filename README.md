# Foundation for Youth Initiative (FYI) - Landing Page

A professional, modern, and responsive landing page for the Foundation for Youth Initiative, a non-profit organization working in Ethiopia and South Sudan to empower youth, women, and smallholder farmers through entrepreneurship and sustainable development.

## 🌟 Features

- **Modern React/TypeScript** application built with Vite
- **Responsive Design** - Works perfectly on all devices
- **Interactive Contact Form** - Partnership inquiries sent directly to email
- **Professional Animations** - Smooth Framer Motion animations
- **Optimized Performance** - Fast loading times and modern web standards
- **Accessibility** - Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm package manager

### Installation
1. Clone this repository:
```bash
git clone <your-repo-url>
cd fyi-landing-page
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Building for Production

```bash
npm run build
# or
pnpm build
```

The build files will be generated in the `dist/` directory.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
This repository includes GitHub Actions for automatic deployment to GitHub Pages.

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: "GitHub Actions"

2. **Deploy:**
   - Push to `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 3: Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Option 4: Custom Server
1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Configure your server to serve `index.html` for all routes

## 🛠️ Customization

### Contact Information
Update contact details in `src/App.tsx`:
- Email addresses
- Phone numbers
- Organization information

### Content Updates
Main content is located in `src/App.tsx` - each section is clearly commented:
- Hero Section
- Challenge Section  
- Solution Section
- Impact Pillars
- Success Stories
- Data Snapshot
- Call to Action
- Footer

### Images
Replace images in `public/images/` directory with your own:
- `hero-community-innovation.jpg` - Main hero background
- `climate-smart-agriculture.jpg` - Agriculture pillar
- `ecological-restoration.jpg` - Restoration pillar
- `renewable-energy-access.jpg` - Energy pillar
- `green-enterprise-development.jpg` - Enterprise pillar
- `peace-resilience.JPG` - Peace pillar
- `mangalla-women-success.jpg` - Success story 1
- `shalom-cooperative-success.jpg` - Success story 2
- `cta-background.jpg` - Call to action background

### Styling
- Brand colors are defined in `tailwind.config.js`
- Custom styles in `src/index.css`
- Component-specific styles in `src/App.tsx`

## 📧 Contact Form Configuration

The contact form currently uses `mailto:` functionality. To set up a backend service:

1. **EmailJS (Recommended for simple setup):**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Update the form submission logic in `src/App.tsx`

2. **Custom Backend:**
   - Set up a form handler API endpoint
   - Update the `handleSubmit` function in the `CTASection` component

3. **Third-party Services:**
   - Formspree, Netlify Forms, or similar services
   - Follow their integration documentation

## 🔧 Technical Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions about the Foundation for Youth Initiative:
- Email: partnerships@fyi-africa.org
- Phone: +251 911 391 731 | +251 913 278 065

For technical support with this website:
- Create an issue in this repository
- Include browser version and steps to reproduce any problems

## 🌍 About FYI

The Foundation for Youth Initiative (FYI) empowers youth, women, and smallholder farmers in Ethiopia and South Sudan to build climate-resilient businesses and peaceful communities. We believe in investment, not handouts, providing capital, skills, and market access to build sustainable futures.

**Impact to Date (2023):**
- 94,000 lives directly impacted
- 10,373 people with increased incomes  
- 115 sustainable jobs created
- 24 local enterprises supported

---

Built with ❤️ for sustainable development in the Horn of Africa
