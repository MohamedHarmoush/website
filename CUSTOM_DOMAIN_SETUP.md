# Custom Domain Management Guide (Without Domain Purchase)

## 🎯 Understanding Custom Domains

**Important**: You **cannot** use a custom domain without purchasing it first. However, you can **prepare everything** so it's ready when you do purchase a domain.

## 📋 Current Setup: Free Subdomain

**Right now, your site uses:**
- ✅ Free GitHub subdomain: `https://mohamedharmoush.github.io/website/`
- ✅ No domain purchase needed
- ✅ Works immediately
- ✅ Free forever

## 🔄 Switching to Custom Domain (When You Purchase One)

When you're ready to use a custom domain, here's how to switch:

### Step 1: Purchase Domain (When Ready)

**Where to buy** (cheapest options):
- **Namecheap**: ~$8-12/year
- **Google Domains**: ~$12/year
- **Cloudflare**: ~$8-10/year (cheapest!)
- **GoDaddy**: ~$12-15/year

**Recommended**: Cloudflare (cheapest + free CDN)

### Step 2: Create CNAME File

Once you purchase a domain (e.g., `mohamedharmoush.com`):

```bash
# Create CNAME file with your domain
echo "mohamedharmoush.com" > public/CNAME

# Commit it
git add public/CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

### Step 3: Configure DNS at Domain Registrar

Add these 4 A records at your domain registrar:

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

### Step 4: Configure in GitHub Pages

1. Go to: Repository → Settings → Pages
2. Under **Custom domain**: Enter your domain (e.g., `mohamedharmoush.com`)
3. Check **Enforce HTTPS**
4. Wait for DNS to propagate (5 min - 48 hours)

### Step 5: Update URLs in Code

Update these files with your custom domain:

1. **`pages/_document.tsx`**: Update Open Graph URL
2. **`public/sitemap.xml`**: Update URLs
3. **Any hardcoded URLs**: Update to custom domain

## 🔧 How the System Works

The GitHub Actions workflow **automatically detects** which setup you're using:

### Without Custom Domain (Current):
- ✅ No CNAME file → Uses free subdomain
- ✅ basePath: `/website` (repository name)
- ✅ URL: `https://mohamedharmoush.github.io/website/`

### With Custom Domain (Future):
- ✅ CNAME file exists → Uses custom domain
- ✅ basePath: `` (empty, root domain)
- ✅ URL: `https://mohamedharmoush.com`

**The workflow switches automatically!** No code changes needed.

## 📝 Preparing for Custom Domain (Before Purchase)

You can prepare everything now, even without a domain:

### Option 1: Keep Current Setup (Recommended)

**Best for**: Using free subdomain now, switching later

- ✅ No CNAME file (uses free subdomain)
- ✅ Works immediately
- ✅ Easy to switch later (just add CNAME file)

### Option 2: Prepare Configuration

**Best for**: Planning to purchase domain soon

1. **Create placeholder CNAME** (won't work until domain purchased):
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```
   ⚠️ **Note**: This will cause GitHub Pages to fail until domain is configured

2. **Update URLs in code** (prepare for custom domain):
   - Update `pages/_document.tsx`
   - Update `public/sitemap.xml`

3. **When domain purchased**: Just update CNAME file with real domain

## 🎯 Recommended Approach

### For Now (No Domain):
✅ **Use free subdomain** - Works immediately, zero cost

### When You Purchase Domain:
1. Add CNAME file with your domain
2. Configure DNS at registrar
3. Set custom domain in GitHub Pages
4. Update URLs in code
5. Done!

## 🔄 Switching Between Free Subdomain and Custom Domain

### Switch TO Custom Domain:
```bash
# Add CNAME file
echo "yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push origin main

# Configure DNS at registrar
# Set custom domain in GitHub Pages settings
```

### Switch BACK to Free Subdomain:
```bash
# Remove CNAME file
rm public/CNAME
git add public/CNAME
git commit -m "Switch back to free subdomain"
git push origin main

# Remove custom domain from GitHub Pages settings
```

## 📊 Comparison

| Feature | Free Subdomain | Custom Domain |
|---------|---------------|---------------|
| **Cost** | $0/month | ~$10-15/year |
| **URL** | `username.github.io/repo` | `yourdomain.com` |
| **Setup** | Instant | 30 min + DNS |
| **CDN** | ✅ Automatic | ✅ Automatic |
| **HTTPS** | ✅ Automatic | ✅ Automatic |
| **Professional** | Good | Better |

## ✅ Current Status

**You're using**: Free subdomain (no domain purchase needed)
- ✅ Works now
- ✅ Free forever
- ✅ Easy to switch later

**To use custom domain**: Purchase domain first, then follow steps above

## 🚀 Quick Reference

### Current Setup (Free):
- URL: `https://mohamedharmoush.github.io/website/`
- CNAME: None (using free subdomain)
- Cost: $0/month

### Future Setup (Custom Domain):
- URL: `https://yourdomain.com`
- CNAME: `yourdomain.com`
- Cost: ~$10-15/year (domain only)

## 💡 Pro Tip

**Best strategy**:
1. ✅ Start with free subdomain (works now)
2. ✅ Use it while you decide on domain
3. ✅ Purchase domain when ready (~$10/year)
4. ✅ Switch to custom domain (easy, just add CNAME)

**You can switch anytime!** The workflow handles both automatically.

---

**Summary**: You can't use a custom domain without purchasing it, but you can prepare everything now. The system automatically works with both free subdomain and custom domain - just add/remove the CNAME file!

