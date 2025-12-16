# Deployment Checklist for mohamedHarmoush.com

## ✅ What's Already Done

- [x] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [x] CNAME file created (`public/CNAME` with `mohamedHarmoush.com`)
- [x] Next.js configured for custom domain
- [x] SEO meta tags updated
- [x] Sitemap configured
- [x] Deployment documentation created

## 📋 What You Need to Do

### 1. Push Code to GitHub (if not done)

```bash
# If repository doesn't exist on GitHub, create it first
# Then run:

git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to: `https://github.com/yourusername/your-repo-name`
2. Click: **Settings** (top menu)
3. Click: **Pages** (left sidebar)
4. Under **Source**: Select **GitHub Actions**
5. Click: **Save**

### 3. Set Custom Domain

1. Still in **Settings** → **Pages**
2. Under **Custom domain**: Enter `mohamedHarmoush.com`
3. Click: **Save**
4. ⚠️ **Don't check "Enforce HTTPS" yet** (wait until DNS is configured)

### 4. Configure DNS

Go to your domain registrar and add DNS records:

**Option A: A Records (Recommended)**

Add 4 A records:

```
Type: A
Name: @ (or blank/root)
Value: 185.199.108.153
TTL: 3600

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

**Option B: CNAME (Alternative)**

```
Type: CNAME
Name: @
Value: yourusername.github.io
TTL: 3600
```

### 5. Verify Deployment

1. **Check GitHub Actions**:
   - Go to repository → **Actions** tab
   - Wait for workflow to complete (green checkmark)

2. **Check DNS Propagation**:
   - Visit: https://dnschecker.org
   - Enter: `mohamedHarmoush.com`
   - Verify all locations show GitHub Pages IPs

3. **Test Website**:
   - Visit: `http://mohamedHarmoush.com` (HTTP first)
   - Should load your website

4. **Enable HTTPS**:
   - Go to **Settings** → **Pages**
   - Check **Enforce HTTPS**
   - Wait for SSL certificate (can take a few hours)

5. **Final Test**:
   - Visit: `https://mohamedHarmoush.com`
   - Verify HTTPS padlock appears
   - Test all pages and links

## 🎯 Expected Timeline

- **GitHub Actions**: 2-5 minutes after push
- **DNS Propagation**: 5 minutes to 48 hours
- **SSL Certificate**: A few hours after DNS propagates

## 📚 Need Help?

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions and troubleshooting.

---

**Quick Links**:
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Complete deployment guide
- [README.md](./README.md) - Project documentation

