# 🔧 Fix Redirect Issue

## Problem

Visiting `https://mohamedharmoush.github.io/website/` redirects to `http://mohamedharmoush.com/` which doesn't exist.

## Cause

GitHub Pages has a custom domain configured in the repository settings, causing automatic redirects.

## ✅ Solution: Remove Custom Domain from GitHub Pages

### Step 1: Go to GitHub Pages Settings

1. Go to: `https://github.com/MohamedHarmoush/website/settings/pages`
2. Scroll down to **"Custom domain"** section

### Step 2: Remove Custom Domain

1. **Clear the custom domain field** (delete `mohamedharmoush.com` if it's there)
2. **OR click "Remove"** button if available
3. Click **Save**

### Step 3: Verify No CNAME in Repository

Make sure there's no CNAME file in your repository:

```bash
# Check if CNAME exists
ls -la public/CNAME

# If it exists, remove it
rm public/CNAME
git add public/CNAME
git commit -m "Remove CNAME file"
git push origin main
```

### Step 4: Wait and Test

1. Wait 2-5 minutes for changes to propagate
2. Visit: `https://mohamedharmoush.github.io/website/`
3. Should work without redirect! ✅

## 🔍 Verify Settings

After removing custom domain, your GitHub Pages settings should show:

- ✅ **Source**: GitHub Actions
- ✅ **Custom domain**: (empty/blank)
- ✅ **Enforce HTTPS**: (can be checked or unchecked)

## 📋 Quick Checklist

- [ ] Removed custom domain from GitHub Pages settings
- [ ] No CNAME file in repository
- [ ] Waited 2-5 minutes
- [ ] Tested: `https://mohamedharmoush.github.io/website/`
- [ ] No redirect! ✅

## 🚨 If Still Redirecting

If it still redirects after removing custom domain:

1. **Clear browser cache**:
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Select "Cached images and files"
   - Clear data

2. **Try incognito/private window**

3. **Wait longer** (up to 15 minutes for DNS cache to clear)

4. **Check GitHub Actions**:
   - Go to repository → Actions
   - Ensure latest deployment succeeded
   - Redeploy if needed

---

**The fix is simple**: Just remove the custom domain from GitHub Pages settings!

