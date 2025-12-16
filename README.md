# Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS. Easily editable through JSON configuration and automatically deployed to GitHub Pages.

## Features

- 📄 **Easy Editing**: Edit your resume by updating a single JSON file
- 🎨 **Modern Design**: Clean, professional, and responsive design
- 🖨️ **Print-Friendly**: Optimized for printing
- 🚀 **Auto-Deploy**: Automatic deployment to GitHub Pages via GitHub Actions
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Static site generation for optimal performance

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Edit your resume data:
   - Open `data/resume.json`
   - Update all sections with your information

4. Add your resume PDF:
   - Place your PDF file in `public/Mohamed_Harmoush_resume.pdf`
   - Or update the filename in `pages/index.tsx` if using a different name

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Editing Your Resume

### Resume Data Structure

Edit `data/resume.json` to update your resume. The structure includes:

- **personal**: Name, title, summary, and contact information
- **experience**: Work experience with company, position, dates, and achievements
- **education**: Educational background with degrees and institutions
- **skills**: Categorized skills list
- **projects**: Personal or professional projects
- **certifications**: Professional certifications

### Example: Adding Work Experience

```json
{
  "company": "Tech Company Inc.",
  "position": "Senior Software Engineer",
  "location": "San Francisco, CA",
  "startDate": "2020-01",
  "endDate": "2023-12",
  "current": false,
  "description": "Led development of scalable web applications",
  "achievements": [
    "Improved application performance by 40%",
    "Mentored team of 5 junior developers",
    "Implemented CI/CD pipeline reducing deployment time by 60%"
  ]
}
```

### Date Format

- Use `YYYY-MM` format for dates (e.g., "2020-01" for January 2020)
- Use `YYYY` format for years only (e.g., "2020")
- Set `"current": true` for current positions

## Deployment to GitHub Pages

### Initial Setup

1. **Create GitHub Repository**:
   - Create a new repository on GitHub (e.g., `resume-website` or `yourusername.github.io`)
   - **Important**: If you want your site at `https://yourusername.github.io/`, name your repository `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - If you use a different name, your site will be at `https://yourusername.github.io/repo-name/`
   - Push your code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Add Your Resume PDF**:
   - Place your `Mohamed_Harmoush_resume.pdf` file in the `public/` directory
   - The file will be accessible at `/Mohamed_Harmoush_resume.pdf` on your deployed site

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
   - The GitHub Actions workflow will automatically handle deployment

4. **Base Path Configuration**:
   - The GitHub Actions workflow automatically sets the correct `BASE_PATH` based on your repository name
   - If your repo is `yourusername.github.io`, the base path will be empty (root domain)
   - If your repo has any other name, the base path will be `/repo-name`
   - **No manual configuration needed** - the workflow handles this automatically

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Trigger automatically on every push to the `main` branch
2. Build the Next.js static site with the correct base path
3. Deploy to GitHub Pages
4. Your site will be live within 1-2 minutes

### Your Site URL

After deployment, your site will be available at:
- `https://yourusername.github.io/` (if repository is named `yourusername.github.io`)
- `https://yourusername.github.io/repo-name/` (if repository has a different name)

**Example**: If your GitHub username is `mohamedharmoush` and your repo is `resume-website`, your site will be at:
`https://mohamedharmoush.github.io/resume-website/`

### First Deployment

1. After pushing your code, go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, visit your site URL
5. If you see a 404, wait a few more minutes for DNS propagation

### Updating Your Resume

To update your resume:
1. Edit `data/resume.json` with your new information
2. Commit and push the changes:
   ```bash
   git add data/resume.json
   git commit -m "Update resume information"
   git push
   ```
3. The site will automatically rebuild and deploy within 1-2 minutes

## Project Structure

```
website/
├── components/          # React components
│   ├── Layout.tsx
│   ├── ResumeHeader.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   └── CertificationsSection.tsx
├── data/
│   └── resume.json      # Your resume data (EDIT THIS!)
├── pages/
│   ├── _app.tsx
│   ├── index.tsx        # Home page
│   └── resume.tsx       # Full resume page
├── public/
│   └── Mohamed_Harmoush_resume.pdf  # Your PDF resume
├── styles/
│   └── globals.css      # Global styles
├── types/
│   └── resume.ts        # TypeScript types
└── next.config.js       # Next.js configuration
```

## Customization

### Styling

- Edit `tailwind.config.js` to customize colors and theme
- Modify `styles/globals.css` for global styles
- Update component files for component-specific styling

### Adding New Sections

1. Add the section type to `types/resume.ts`
2. Update `data/resume.json` with your data
3. Create a new component in `components/`
4. Import and use it in `pages/resume.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (for testing)
- `npm run lint` - Run ESLint

## Troubleshooting

### Build Errors

- Ensure all required fields in `resume.json` are filled
- Check that date formats are correct
- Verify TypeScript types match your data structure

### GitHub Pages Not Updating

- Check GitHub Actions tab for workflow status and any error messages
- Ensure Pages source is set to "GitHub Actions" (not "Deploy from a branch")
- Verify the workflow completed successfully (green checkmark)
- Wait 2-3 minutes after deployment for changes to propagate
- Clear your browser cache or try an incognito window
- Check that your repository name matches your expected URL structure

### Styling Issues

- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify `globals.css` is imported in `_app.tsx`

## License

MIT License - feel free to use this template for your own resume website!

## Support

For issues or questions, please open an issue on GitHub.
