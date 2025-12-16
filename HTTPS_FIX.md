# Fix HTTPS Issue

## Problem
Website is accessible via HTTP instead of HTTPS.

## Solution

### Step 1: Enable HTTPS in GitHub Pages

1. Go to: `https://github.com/MohamedHarmoush/website/settings/pages`
2. Scroll to **"Enforce HTTPS"** section
3. **Check the checkbox** to enable HTTPS
4. Click **Save**

**Note**: This option is only available after:
- GitHub Pages is enabled
- Site has been deployed at least once
- DNS is properly configured (if using custom domain)

### Step 2: Wait for SSL Certificate

- GitHub automatically issues SSL certificates
- Can take a few minutes to a few hours
- Once enabled, all HTTP requests will redirect to HTTPS

### Step 3: Verify HTTPS

After enabling:
1. Visit: `http://mohamedharmoush.github.io/website/`
2. Should automatically redirect to: `https://mohamedharmoush.github.io/website/`
3. Browser should show padlock icon ✅

## Current Status

✅ **Code changes made**:
- Added HSTS header in `_document.tsx`
- Created `_headers` file for security headers
- Created redirect page for `/resume`

⚠️ **Action required**:
- Enable HTTPS in GitHub Pages settings (see Step 1 above)

## Why HTTP Still Works

GitHub Pages serves both HTTP and HTTPS by default. You need to explicitly enable "Enforce HTTPS" to force all traffic to HTTPS.

---

**After enabling HTTPS in GitHub Pages settings, all HTTP requests will automatically redirect to HTTPS.**

