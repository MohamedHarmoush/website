# 🚀 Deploy Now - Quick Commands

All files are committed and ready! Follow these steps to deploy:

## Step 1: Create GitHub Repository (if not exists)

1. Go to: https://github.com/new
2. Repository name: `website` (or your preferred name)
3. Set to **Public** (required for free GitHub Pages)
4. **Don't** initialize with README (we already have files)
5. Click **Create repository**

## Step 2: Add Remote and Push

**Replace `YOUR_USERNAME` with your GitHub username:**

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/website.git

# Push to GitHub
git push -u origin main
```

**Or if you prefer SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/website.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/website/settings/pages`
2. Under **Source**: Select **GitHub Actions**
3. Under **Custom domain**: Enter `mohamedHarmoush.com`
4. Click **Save**

## Step 4: Configure DNS

Go to your domain registrar and add these 4 A records:

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

## Step 5: Wait and Verify

1. Check GitHub Actions: Repository → Actions tab
2. Wait for workflow to complete (2-5 minutes)
3. Check DNS: https://dnschecker.org (enter mohamedHarmoush.com)
4. Visit: http://mohamedHarmoush.com
5. Enable HTTPS: Settings → Pages → Enforce HTTPS

---

**Need help?** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

