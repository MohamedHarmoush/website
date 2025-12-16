# Complete Deployment Guide for mohamedHarmoush.com

This guide provides step-by-step instructions to deploy your resume website to `https://mohamedHarmoush.com` using GitHub Pages.

## 📋 Prerequisites

- ✅ GitHub repository created
- ✅ Domain `mohamedHarmoush.com` registered
- ✅ Access to domain DNS settings
- ✅ GitHub account with repository access

## 🚀 Quick Start (5 Steps)

### Step 1: Push Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: Resume website"

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Save the settings

### Step 3: Configure Custom Domain in GitHub

1. Still in **Settings** → **Pages**
2. Under **Custom domain**, enter: `mohamedHarmoush.com`
3. Click **Save**
4. **Important**: Do NOT check "Enforce HTTPS" yet (wait until DNS is configured)

### Step 4: Configure DNS Records

Go to your domain registrar (where you bought mohamedHarmoush.com) and add DNS records:

#### Option A: A Records (Recommended)

Add these 4 A records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note**: Some registrars use `@` for root domain, others use blank or `*`. Check your registrar's documentation.

#### Option B: CNAME Record (Alternative)

If your registrar supports CNAME on root domain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | @ | yourusername.github.io | 3600 |

**Replace `yourusername` with your actual GitHub username.**

### Step 5: Wait and Verify

1. **Wait for DNS propagation** (can take 5 minutes to 48 hours)
   - Check DNS: https://dnschecker.org
   - Enter: `mohamedHarmoush.com`
   - Verify all locations show the GitHub Pages IPs

2. **Verify GitHub Actions**
   - Go to repository → **Actions** tab
   - You should see "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

3. **Enable HTTPS**
   - Go to **Settings** → **Pages**
   - Check **Enforce HTTPS** (should be available after DNS propagates)
   - Wait for SSL certificate (usually automatic, can take a few hours)

4. **Test your website**
   - Visit: `https://mohamedHarmoush.com`
   - Test: `https://mohamedHarmoush.com/resume`

## 📁 Files Already Configured

The following files are already set up for you:

✅ **`.github/workflows/deploy.yml`** - GitHub Actions workflow
✅ **`public/CNAME`** - Contains `mohamedHarmoush.com`
✅ **`next.config.js`** - Configured for custom domain
✅ **`pages/_document.tsx`** - SEO meta tags updated
✅ **`public/sitemap.xml`** - URLs updated

## 🔍 Verification Checklist

After deployment, verify:

- [ ] DNS records added at domain registrar
- [ ] Custom domain set in GitHub Pages settings
- [ ] GitHub Actions workflow completed successfully
- [ ] DNS propagated (check with dnschecker.org)
- [ ] Website accessible at `http://mohamedHarmoush.com` (HTTP first)
- [ ] HTTPS enabled in GitHub Pages settings
- [ ] Website accessible at `https://mohamedHarmoush.com` (HTTPS)
- [ ] All pages working (home and /resume)
- [ ] Links and images loading correctly

## 🛠️ Troubleshooting

### DNS Not Resolving

**Problem**: Website shows "This site can't be reached"

**Solutions**:
1. Wait longer (DNS can take up to 48 hours)
2. Verify DNS records are correct
3. Check DNS propagation: https://dnschecker.org
4. Clear your browser cache
5. Try different DNS servers (8.8.8.8, 1.1.1.1)

### Custom Domain Not Working

**Problem**: GitHub Pages shows "Domain verification failed"

**Solutions**:
1. Verify `public/CNAME` file contains exactly: `mohamedHarmoush.com`
2. Ensure CNAME file is committed and pushed
3. Check GitHub Pages settings → Custom domain is set correctly
4. Wait for DNS to fully propagate

### Build Failures

**Problem**: GitHub Actions workflow fails

**Solutions**:
1. Check Actions tab for error messages
2. Verify `package.json` has all dependencies
3. Check `next.config.js` syntax
4. Ensure Node.js version is compatible (18.x)

### HTTPS Not Available

**Problem**: "Enforce HTTPS" checkbox is grayed out

**Solutions**:
1. Wait for DNS to fully propagate (can take 24-48 hours)
2. Verify DNS records are correct
3. Remove and re-add custom domain in GitHub Pages settings
4. Wait a few hours for SSL certificate to be issued

### Website Shows 404

**Problem**: Website loads but shows 404 error

**Solutions**:
1. Check GitHub Actions build logs
2. Verify `out/` directory contains files after build
3. Check `next.config.js` basePath configuration
4. Ensure CNAME file is in `out/` directory

## 🔄 Updating Your Website

After initial deployment, updating is simple:

1. **Edit files** (e.g., `data/resume.json`)
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update resume content"
   git push origin main
   ```
3. **Wait for deployment** (2-5 minutes)
4. **Changes are live** at `https://mohamedHarmoush.com`

## 📊 Monitoring Deployment

### Check Deployment Status

1. Go to repository → **Actions** tab
2. Click on the latest workflow run
3. View build logs and deployment status

### Check Website Status

- **GitHub Pages**: Settings → Pages → See deployment status
- **Website**: Visit `https://mohamedHarmoush.com`
- **SSL**: Check browser padlock icon

## 🌐 DNS Providers Guide

### Common Registrars

**Namecheap**:
- Go to Domain List → Manage → Advanced DNS
- Add A records with values listed above

**GoDaddy**:
- Go to My Products → DNS → Records
- Add A records with values listed above

**Google Domains**:
- Go to DNS → Custom records
- Add A records with values listed above

**Cloudflare**:
- Go to DNS → Records
- Add A records (proxied or DNS only)
- Note: If proxied, use different IPs (check Cloudflare docs)

## 📝 Important Notes

1. **DNS Propagation**: Can take 5 minutes to 48 hours globally
2. **SSL Certificate**: Automatically issued by GitHub, can take a few hours
3. **CNAME File**: Must be in `public/CNAME` and will be copied automatically
4. **Base Path**: Automatically set to empty for custom domain
5. **HTTPS**: Always enable after DNS propagates

## 🆘 Getting Help

If you encounter issues:

1. Check GitHub Actions logs for specific errors
2. Verify DNS configuration using online tools
3. Check GitHub Pages documentation: https://docs.github.com/en/pages
4. Review this guide's troubleshooting section

## ✅ Success Indicators

You'll know deployment is successful when:

- ✅ GitHub Actions shows green checkmark
- ✅ DNS checker shows GitHub Pages IPs globally
- ✅ Website loads at `https://mohamedHarmoush.com`
- ✅ HTTPS padlock appears in browser
- ✅ All pages and links work correctly

---

**Last Updated**: January 2025  
**Domain**: mohamedHarmoush.com  
**Hosting**: GitHub Pages

