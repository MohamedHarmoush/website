# Deployment Guide for mohamedHarmoush.com

This guide walks you through deploying your resume website to `https://mohamedHarmoush.com` using GitHub Pages.

## Prerequisites

- GitHub repository set up
- Domain `mohamedHarmoush.com` registered
- Access to domain DNS settings

## Step 1: Configure DNS Records

### Option A: A Records (Recommended for root domain)

Add these A records at your domain registrar:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Option B: CNAME Record (Alternative)

```
Type: CNAME
Name: @ (or leave blank for root domain)
Value: yourusername.github.io
TTL: 3600
```

**Note**: Some registrars don't support CNAME on root domain (@). Use A records in that case.

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**
4. Under **Custom domain**, enter: `mohamedHarmoush.com`
5. Check **Enforce HTTPS** (will be available after DNS propagates)

## Step 3: Verify CNAME File

The `public/CNAME` file should contain:
```
mohamedHarmoush.com
```

This file is automatically copied to the build output during deployment.

## Step 4: Deploy

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Configure custom domain"
   git push origin main
   ```

2. **Monitor deployment**:
   - Go to your repository → **Actions** tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Wait for it to complete (usually 2-5 minutes)

3. **Verify DNS propagation**:
   ```bash
   # Check if DNS is resolving
   dig mohamedHarmoush.com +short
   
   # Or use online tools:
   # https://dnschecker.org
   # https://www.whatsmydns.net
   ```

## Step 5: Enable HTTPS

After DNS propagates (can take 24-48 hours):

1. Go to repository → **Settings** → **Pages**
2. Check **Enforce HTTPS**
3. Wait for SSL certificate to be issued (usually automatic within a few hours)

## Troubleshooting

### DNS Not Resolving

- **Wait**: DNS changes can take up to 48 hours to propagate globally
- **Check**: Verify DNS records are correct using `dig` or online DNS checkers
- **Verify**: Ensure A records point to GitHub Pages IPs listed above

### Custom Domain Not Working

- **Check CNAME file**: Ensure `public/CNAME` contains `mohamedHarmoush.com`
- **GitHub Settings**: Verify custom domain is set in repository Settings → Pages
- **DNS**: Ensure DNS records are correct and propagated

### Build Failures

- **Check Actions**: Go to repository → Actions tab to see error messages
- **Verify**: Ensure `next.config.js` has correct `basePath` configuration
- **Logs**: Check GitHub Actions logs for specific errors

### HTTPS Not Available

- **Wait**: SSL certificates are issued automatically but can take a few hours
- **DNS**: Ensure DNS is fully propagated before enabling HTTPS
- **Settings**: Go to Settings → Pages and check "Enforce HTTPS" checkbox

## Verification Checklist

- [ ] DNS records added at domain registrar
- [ ] Custom domain configured in GitHub Pages settings
- [ ] CNAME file exists in `public/CNAME`
- [ ] Changes committed and pushed to `main` branch
- [ ] GitHub Actions workflow completed successfully
- [ ] DNS propagated (check with `dig` or online tools)
- [ ] HTTPS enabled and working
- [ ] Website accessible at `https://mohamedHarmoush.com`

## Post-Deployment

After successful deployment:

1. **Test the website**: Visit `https://mohamedHarmoush.com`
2. **Check all pages**: Verify home page and `/resume` page work correctly
3. **Test links**: Ensure all internal and external links work
4. **Mobile test**: Verify responsive design on mobile devices
5. **SEO check**: Verify meta tags and structured data are correct

## Future Updates

To update your website:

1. Edit `data/resume.json` or other files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update resume content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy
4. Changes will be live at `https://mohamedHarmoush.com` within a few minutes

## Support

If you encounter issues:

1. Check GitHub Actions logs for errors
2. Verify DNS configuration
3. Check GitHub Pages settings
4. Review this deployment guide

---

**Last Updated**: January 2025
