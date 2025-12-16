# Managing Custom Domain for GitHub Pages

Complete guide for setting up and managing a custom domain for your GitHub Pages site.

## 🎯 Overview

This guide covers everything you need to know about using a custom domain (like `mohamedharmoush.com`) with your GitHub Pages site.

## 📋 Prerequisites

- ✅ GitHub repository with GitHub Pages enabled
- ✅ Domain name purchased (e.g., mohamedharmoush.com)
- ✅ Access to domain registrar DNS settings

## 🚀 Step-by-Step Setup

### Step 1: Add CNAME File

Create or update `public/CNAME` file:

```bash
# Create CNAME file
echo "mohamedharmoush.com" > public/CNAME

# Or create it manually with content:
# mohamedharmoush.com
```

**Important**: 
- Use your exact domain name (lowercase recommended)
- No `http://` or `https://`
- No trailing slash
- One domain per line

### Step 2: Commit and Push

```bash
git add public/CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

### Step 3: Configure DNS Records

Go to your domain registrar and add DNS records:

#### Option A: A Records (Recommended for root domain)

Add **4 A records**:

```
Record 1:
Type: A
Name: @ (or blank/root)
Value: 185.199.108.153
TTL: 3600

Record 2:
Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Record 3:
Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Record 4:
Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Option B: CNAME Record (Alternative)

```
Type: CNAME
Name: @ (or blank)
Value: mohamedharmoush.github.io
TTL: 3600
```

**Note**: Not all registrars support CNAME on root domain. Use A records if CNAME isn't available.

### Step 4: Configure in GitHub Pages

1. Go to repository → **Settings** → **Pages**
2. Under **Custom domain**, enter: `mohamedharmoush.com`
3. Click **Save**
4. **Don't check "Enforce HTTPS" yet** (wait until DNS propagates)

### Step 5: Wait for DNS Propagation

- **Minimum**: 5-15 minutes
- **Typical**: 1-4 hours
- **Maximum**: 24-48 hours

Check DNS propagation:
- https://dnschecker.org
- https://www.whatsmydns.net

### Step 6: Verify DNS Check

1. Go back to GitHub Pages settings
2. Click **"Check again"** button
3. Wait for DNS check to pass ✅

### Step 7: Enable HTTPS

Once DNS check passes:

1. Check **"Enforce HTTPS"** checkbox
2. Wait for SSL certificate (automatic, can take a few hours)
3. Your site will be available at `https://mohamedharmoush.com`

## 🔧 Managing Your Custom Domain

### Update Domain Name

To change your custom domain:

1. **Update CNAME file**:
   ```bash
   echo "newdomain.com" > public/CNAME
   git add public/CNAME
   git commit -m "Update custom domain"
   git push origin main
   ```

2. **Update GitHub Pages settings**:
   - Settings → Pages → Custom domain
   - Enter new domain
   - Save

3. **Update DNS records** at registrar for new domain

### Remove Custom Domain

To remove custom domain and use free subdomain:

1. **Remove CNAME file**:
   ```bash
   git rm public/CNAME
   git commit -m "Remove custom domain"
   git push origin main
   ```

2. **Remove in GitHub Pages**:
   - Settings → Pages → Custom domain
   - Click **Remove**
   - Confirm

3. **Site will be available at**: `https://username.github.io/repo-name/`

### Add Subdomain (www)

To add `www.mohamedharmoush.com`:

1. **Add CNAME record** at registrar:
   ```
   Type: CNAME
   Name: www
   Value: mohamedharmoush.github.io
   TTL: 3600
   ```

2. **GitHub automatically handles www** - no CNAME file needed for www

3. **Both work**:
   - `https://mohamedharmoush.com`
   - `https://www.mohamedharmoush.com`

### Verify Domain Configuration

Check your domain setup:

```bash
# Check CNAME file
cat public/CNAME

# Verify DNS records
dig mohamedharmoush.com +short
# Should show: 185.199.108.153, 185.199.109.153, etc.

# Check DNS propagation
# Visit: https://dnschecker.org
```

## 🛠️ Troubleshooting

### DNS Check Unsuccessful

**Problem**: GitHub shows "DNS check unsuccessful"

**Solutions**:
1. Verify DNS records are correct (all 4 A records)
2. Wait longer (can take up to 48 hours)
3. Check DNS propagation using online tools
4. Remove and re-add custom domain in GitHub Pages
5. Verify CNAME file contains exact domain name

### HTTPS Not Available

**Problem**: "Enforce HTTPS" checkbox is grayed out

**Solutions**:
1. Wait for DNS to fully propagate
2. Ensure DNS check passes in GitHub Pages
3. Remove and re-add custom domain
4. Wait a few hours for SSL certificate

### Domain Not Resolving

**Problem**: Website shows "This site can't be reached"

**Solutions**:
1. Verify DNS records at registrar
2. Check DNS propagation globally
3. Clear browser cache
4. Try different DNS servers (8.8.8.8, 1.1.1.1)
5. Verify GitHub Pages deployment succeeded

### Wrong Domain Showing

**Problem**: Wrong domain or old domain still showing

**Solutions**:
1. Clear browser cache
2. Verify CNAME file is correct
3. Check GitHub Pages settings
4. Wait for DNS cache to clear (can take hours)

### SSL Certificate Issues

**Problem**: HTTPS not working or certificate errors

**Solutions**:
1. Ensure DNS check passes
2. Wait for SSL certificate (automatic, can take hours)
3. Check "Enforce HTTPS" is enabled
4. Verify DNS records are correct
5. Contact GitHub support if persists

## 📊 Domain Registrar Guides

### Namecheap

1. Go to **Domain List** → **Manage** → **Advanced DNS**
2. Add 4 A records:
   - Host: `@`
   - Value: `185.199.108.153` (repeat for all 4)
   - TTL: Automatic
3. Save

### GoDaddy

1. Go to **My Products** → **DNS** → **Records**
2. Click **Add** → Select **A**
3. Add 4 A records:
   - Name: `@`
   - Value: `185.199.108.153` (repeat for all 4)
   - TTL: 600 seconds
4. Save

### Google Domains

1. Go to **DNS** → **Custom records**
2. Add 4 A records:
   - Name: `@`
   - IPv4 address: `185.199.108.153` (repeat for all 4)
3. Save

### Cloudflare

1. Go to **DNS** → **Records**
2. Add 4 A records:
   - Type: A
   - Name: `@` (or root domain)
   - IPv4 address: `185.199.108.153` (repeat for all 4)
   - Proxy status: **DNS only** (not proxied)
3. Save

**Important**: If using Cloudflare proxy (orange cloud), GitHub Pages won't work. Use DNS only (gray cloud).

## ✅ Best Practices

1. **Use A Records**: More reliable than CNAME for root domain
2. **Keep CNAME File**: Always commit CNAME file to repository
3. **Wait for Propagation**: Be patient with DNS changes
4. **Verify Before HTTPS**: Ensure DNS check passes before enabling HTTPS
5. **Monitor DNS**: Use online tools to verify DNS propagation
6. **Backup CNAME**: Keep CNAME file in version control

## 🔄 Switching Between Custom Domain and Subdomain

### From Custom Domain to Free Subdomain

1. Remove CNAME file: `git rm public/CNAME`
2. Remove custom domain in GitHub Pages settings
3. Commit and push
4. Site available at: `https://username.github.io/repo-name/`

### From Free Subdomain to Custom Domain

1. Add CNAME file: `echo "yourdomain.com" > public/CNAME`
2. Configure DNS records at registrar
3. Set custom domain in GitHub Pages settings
4. Wait for DNS propagation
5. Enable HTTPS

## 📝 Checklist

- [ ] CNAME file created with domain name
- [ ] CNAME file committed to repository
- [ ] DNS records added at registrar (4 A records)
- [ ] Custom domain set in GitHub Pages settings
- [ ] DNS propagation verified (using online tools)
- [ ] DNS check passes in GitHub Pages
- [ ] HTTPS enabled
- [ ] Website accessible at custom domain
- [ ] Both www and non-www work (if configured)

## 🆘 Getting Help

If you encounter issues:

1. **Check GitHub Actions**: Repository → Actions tab
2. **Verify DNS**: Use dnschecker.org
3. **Check GitHub Pages docs**: https://docs.github.com/en/pages
4. **Review this guide**: See troubleshooting section above
5. **Contact support**: GitHub Support or domain registrar support

## 📚 Additional Resources

- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Checker](https://dnschecker.org)
- [What's My DNS](https://www.whatsmydns.net)

---

**Last Updated**: January 2025

