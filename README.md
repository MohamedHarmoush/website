# Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS. Hosted for free on GitHub Pages.

## 🚀 Features

- **Easy to Edit**: All content is stored in `data/resume.json` - just edit the JSON file to update your resume
- **Modern Design**: Glassmorphism design with animated background blobs, inspired by [momabrouk.com](https://momabrouk.com/)
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **ATS-Friendly**: Optimized for Applicant Tracking Systems with structured data and print-friendly styles
- **Free Hosting**: Automatically deployed to GitHub Pages via GitHub Actions

## 📁 Project Structure

```
website/
├── components/          # React components
│   ├── HeroSidebar.tsx      # Left sidebar with personal info
│   ├── ExperienceSection.tsx # Work experience display
│   ├── EducationSection.tsx  # Education display
│   ├── SkillsSection.tsx     # Skills display
│   ├── ProjectsSection.tsx   # Projects display
│   └── CertificationsSection.tsx # Certifications display
├── data/
│   └── resume.json      # ⭐ MAIN CONTENT FILE - Edit this to update your resume
├── pages/
│   ├── index.tsx        # Home page
│   ├── resume.tsx       # Full resume page
│   └── _document.tsx    # SEO and meta tags
├── styles/
│   └── globals.css       # Global styles and animations
├── types/
│   └── resume.ts         # TypeScript type definitions
└── public/               # Static assets (PDF resume, etc.)
```

## ✏️ How to Update Your Resume

### Quick Start

1. **Edit `data/resume.json`** - This is the main file containing all your resume data
2. **Commit and push** - Changes will automatically deploy to GitHub Pages

### Detailed Guide

#### 1. Personal Information

Update the `personal` section in `data/resume.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "summary": "Your professional summary...",
    "contact": {
      "email": "your.email@example.com",
      "phone": "+1234567890",
      "location": "City, Country",
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername"
    }
  }
}
```

#### 2. Work Experience

Add or update experience entries:

```json
{
  "experience": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "location": "City, Country",
      "startDate": "2024-01",  // Format: YYYY-MM
      "endDate": "2024-12",     // Leave empty "" for current position
      "current": true,          // Set to true if current position
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "technologies": ["Kotlin", "Java", "Android"]  // Technologies used
    }
  ]
}
```

**Note**: The structure is flexible - you can add any additional fields you need. The TypeScript types support this with `[key: string]: any`.

#### 3. Education

```json
{
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "location": "City, Country",
      "startDate": "2014",
      "endDate": "2018",
      "gpa": "3.5",  // Optional
      "honors": ["Dean's List", "Summa Cum Laude"]  // Optional
    }
  ]
}
```

#### 4. Skills

```json
{
  "skills": [
    {
      "category": "Android Development",
      "items": ["Kotlin", "Java", "Jetpack Compose"]
    },
    {
      "category": "Architecture",
      "items": ["MVVM", "MVI", "Clean Architecture"]
    }
  ]
}
```

#### 5. Projects (Optional)

```json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description...",
      "technologies": ["React", "TypeScript"],
      "url": "https://project-url.com",
      "github": "https://github.com/username/project",
      "highlights": [
        "Highlight 1",
        "Highlight 2"
      ]
    }
  ]
}
```

#### 6. Certifications (Optional)

```json
{
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "2024-01",
      "credentialId": "ABC123",  // Optional
      "url": "https://certification-url.com"  // Optional
    }
  ]
}
```

### Adding New Sections

The resume structure is flexible! To add a new section:

1. **Add to `data/resume.json`**:
   ```json
   {
     "newSection": [
       {
         "field1": "value1",
         "field2": "value2"
       }
     ]
   }
   ```

2. **Update `types/resume.ts`** (optional, for TypeScript support):
   ```typescript
   export interface Resume {
     // ... existing fields
     newSection?: NewSectionType[];
     [key: string]: any; // Already supports additional fields
   }
   ```

3. **Create a component** in `components/` to display the new section

4. **Add to pages** (`pages/index.tsx` or `pages/resume.tsx`)

## 🎨 Customization

### Colors

Edit `styles/globals.css` to change the color scheme:

```css
:root {
  --yellow-primary: #f59e0b;  /* Main accent color */
  --yellow-light: #fbbf24;
  --yellow-dark: #d97706;
  /* ... */
}
```

### Fonts

The site uses the Inter font family. To change:

1. Update `styles/globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
   ```

2. Update `tailwind.config.js`:
   ```javascript
   fontFamily: {
     sans: ['YourFont', 'sans-serif'],
   }
   ```

### Styling Components

Each component uses Tailwind CSS classes. You can modify:
- `components/ExperienceSection.tsx` - Experience card styling
- `components/HeroSidebar.tsx` - Sidebar styling
- `components/SkillsSection.tsx` - Skills display
- etc.

## 🚀 Deployment

### Quick Deployment Guide

This website is configured to deploy to `https://mohamedHarmoush.com` using GitHub Pages.

**📖 For complete step-by-step instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

### Quick Steps:

1. **Push code to GitHub** (if not already done)
2. **Enable GitHub Pages**: Repository → Settings → Pages → Source: GitHub Actions
3. **Set custom domain**: Settings → Pages → Custom domain: `mohamedHarmoush.com`
4. **Configure DNS** at your domain registrar (see DEPLOYMENT_GUIDE.md)
5. **Wait for deployment** (GitHub Actions will build automatically)

### Automatic Deployment

Once configured, the site automatically deploys when you push to `main`:

```bash
git add .
git commit -m "Update resume"
git push origin main
```

GitHub Actions will build and deploy automatically. Changes go live at `https://mohamedHarmoush.com` within 2-5 minutes.

### Files Already Configured

✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)  
✅ CNAME file (`public/CNAME`)  
✅ Next.js config for custom domain  
✅ SEO meta tags updated  
✅ Sitemap configured

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions and troubleshooting.

### Manual Build

To build locally:

```bash
npm install
npm run build
```

The static site will be in the `out/` directory.

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 📝 Best Practices

1. **Keep JSON Valid**: Always ensure your `resume.json` is valid JSON
2. **Use Consistent Dates**: 
   - Experience: `YYYY-MM` format (e.g., "2024-01")
   - Education: `YYYY` format (e.g., "2018")
3. **Highlight Achievements**: Use specific metrics and results in achievements
4. **Update Technologies**: Keep technologies list current and relevant
5. **Test Locally**: Always test changes locally before pushing

## 🔧 Troubleshooting

### Build Errors

- **JSON Syntax Error**: Validate your `resume.json` using a JSON validator
- **Type Errors**: Check `types/resume.ts` matches your JSON structure
- **Missing Fields**: Ensure required fields are present (name, title, summary, etc.)

### Deployment Issues

- Check GitHub Actions workflow in `.github/workflows/deploy.yml`
- Ensure repository settings allow GitHub Pages
- Verify `basePath` in `next.config.js` matches your repository name

### Styling Issues

- Clear browser cache
- Check Tailwind classes are valid
- Verify CSS custom properties in `globals.css`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🤝 Contributing

This is a personal resume website. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available for personal use.

---

**Last Updated**: January 2025
