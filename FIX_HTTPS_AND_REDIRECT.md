# 🔒 Fix HTTPS and Resume Redirect Issues

## Issues to Fix

1. **HTTPS not working** - Site loads over HTTP instead of HTTPS
2. **`/resume` path still exists** - Need to redirect to home page

## ✅ Fix 1: Enable HTTPS in GitHub Pages

### Step 1: Go to GitHub Pages Settings

1. Go to: `https://github.com/MohamedHarmoush/website/settings/pages`
2. Scroll down to **"Custom domain"** section

### Step 2: Enable HTTPS

1. **Check "Enforce HTTPS"** checkbox
2. Click **Save**
3. Wait a few minutes for SSL certificate to be issued

**Note**: If "Enforce HTTPS" is grayed out:
- Make sure custom domain field is **empty** (not set)
- Wait a few minutes and try again
- GitHub Pages automatically issues SSL certificates for `*.github.io` domains

### Step 3: Verify HTTPS

1. Visit: `https://mohamedharmoush.github.io/website/`
2. Check browser address bar - should show padlock icon 🔒
3. URL should start with `https://` not `http://`

## ✅ Fix 2: Redirect `/resume` to Home Page

A redirect file has been created at `public/resume/index.html` that will:
- Automatically redirect `/resume` to home page
- Work with static site generation
- Be included in build output

### After Deployment

After pushing and deploying:
1. Visit: `https://mohamedharmoush.github.io/website/resume/`
2. Should automatically redirect to: `https://mohamedharmoush.github.io/website/`

## 📋 Complete Checklist

### HTTPS Fix:
- [ ] Go to repository Settings → Pages
- [ ] Ensure custom domain field is **empty**
- [ ] Check "Enforce HTTPS" checkbox
- [ ] Click Save
- [ ] Wait 2-5 minutes
- [ ] Visit site - should use HTTPS ✅

### Resume Redirect Fix:
- [ ] Redirect file created (`public/resume/index.html`)
- [ ] Push code to GitHub
- [ ] Wait for deployment
- [ ] Test: `https://mohamedharmoush.github.io/website/resume/`
- [ ] Should redirect to home page ✅

## 🚨 If HTTPS Still Not Working

### Check 1: Custom Domain Settings
- Make sure custom domain field is **completely empty**
- If it has `mohamedharmoush.com`, remove it
- Save settings

### Check 2: Wait for SSL Certificate
- GitHub Pages automatically issues SSL certificates
- Can take 5-30 minutes after enabling
- Check again after waiting

### Check 3: Clear Browser Cache
- Clear browser cache and cookies
- Try incognito/private window
- Try different browser

### Check 4: Force HTTPS
- Manually type `https://` in address bar
- Browser should remember HTTPS preference

## 🔍 Verify Everything Works

1. **Home page**: `https://mohamedharmoush.github.io/website/`
   - ✅ Should load over HTTPS
   - ✅ Should show padlock icon

2. **Resume redirect**: `https://mohamedharmoush.github.io/website/resume/`
   - ✅ Should redirect to home page
   - ✅ Should use HTTPS

3. **No HTTP**: `http://mohamedharmoush.github.io/website/`
   - ✅ Should redirect to HTTPS version

## 💡 Why These Issues Happen

### HTTPS Issue:
- GitHub Pages doesn't automatically enforce HTTPS
- Must manually enable "Enforce HTTPS" in settings
- SSL certificates are free and automatic for `*.github.io` domains

### Resume Path Issue:
- Old deployments may have cached the `/resume` route
- Static redirect file ensures it redirects properly
- Next.js static export doesn't handle client-side redirects automatically

## ✅ Summary

**To fix HTTPS:**
1. Settings → Pages → Check "Enforce HTTPS" → Save

**To fix `/resume` redirect:**
1. Redirect file already created
2. Push code and deploy
3. `/resume` will redirect to home

---

**Both fixes are simple!** Just enable HTTPS in settings and push the redirect file.

