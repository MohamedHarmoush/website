# DNS Troubleshooting Guide

## Current Issue: DNS Check Unsuccessful

GitHub Pages is showing "DNS check unsuccessful" which means the DNS records aren't configured correctly yet.

## Step-by-Step Fix

### 1. Verify Domain Name

The domain in GitHub should match exactly. Check:
- GitHub shows: `mohamedharmoush.com` ✅
- CNAME file contains: `mohamedharmoush.com` ✅

**Note**: Domain names are case-insensitive, but must match exactly in spelling.

### 2. Configure DNS Records at Your Domain Registrar

Go to your domain registrar (where you bought mohamedharmoush.com) and add these records:

#### Option A: A Records (Recommended for root domain)

Add **4 A records**:

```
Record 1:
Type: A
Name: @ (or blank/root)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Record 2:
Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Record 3:
Type: A
Name: 185.199.110.153
TTL: 3600

Record 4:
Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Important Notes**:
- Some registrars use `@` for root domain
- Some use blank/empty name field
- Some use `*` or the domain name itself
- Check your registrar's documentation

#### Option B: CNAME Record (If A records don't work)

```
Type: CNAME
Name: @ (or blank)
Value: mohamedharmoush.github.io
TTL: 3600
```

**Note**: Not all registrars support CNAME on root domain. Use A records if CNAME isn't available.

### 3. Common Domain Registrars Setup

#### Namecheap
1. Go to Domain List → Manage → Advanced DNS
2. Add 4 A records:
   - Host: `@`
   - Value: `185.199.108.153` (repeat for all 4 IPs)
   - TTL: Automatic

#### GoDaddy
1. Go to My Products → DNS → Records
2. Click "Add" → Select "A"
3. Add 4 A records:
   - Name: `@`
   - Value: `185.199.108.153` (repeat for all 4 IPs)
   - TTL: 600 seconds

#### Google Domains
1. Go to DNS → Custom records
2. Add 4 A records:
   - Name: `@`
   - IPv4 address: `185.199.108.153` (repeat for all 4 IPs)

#### Cloudflare
1. Go to DNS → Records
2. Add 4 A records:
   - Type: A
   - Name: `@` (or root domain)
   - IPv4 address: `185.199.108.153` (repeat for all 4 IPs)
   - Proxy status: DNS only (not proxied)

### 4. Verify DNS Propagation

After adding DNS records, verify they're propagating:

**Online Tools**:
- https://dnschecker.org - Enter `mohamedharmoush.com`, select "A" record
- https://www.whatsmydns.net - Check global DNS propagation
- https://mxtoolbox.com/DNSLookup.aspx

**Command Line**:
```bash
# Check DNS records
dig mohamedharmoush.com +short

# Should show the 4 GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### 5. Wait for DNS Propagation

- **Minimum**: 5-15 minutes
- **Typical**: 1-4 hours
- **Maximum**: 24-48 hours

DNS changes take time to propagate globally. Be patient!

### 6. Check Again in GitHub

After DNS propagates:

1. Go to repository → Settings → Pages
2. Click **"Check again"** button next to the DNS error
3. Wait a few seconds
4. DNS check should pass ✅

### 7. Enable HTTPS

Once DNS check passes:

1. Check the **"Enforce HTTPS"** checkbox
2. Wait for SSL certificate (usually automatic, can take a few hours)
3. Your site will be available at `https://mohamedharmoush.com`

## Common Issues & Solutions

### Issue: "DNS check unsuccessful" persists

**Solutions**:
1. Verify DNS records are correct (all 4 A records)
2. Wait longer (can take up to 48 hours)
3. Check DNS propagation using online tools
4. Remove and re-add custom domain in GitHub Pages settings
5. Verify CNAME file is correct: `mohamedharmoush.com`

### Issue: Only some DNS locations show records

**Solution**: This is normal during propagation. Wait until all/most locations show the correct IPs.

### Issue: Wrong IP addresses showing

**Solution**: 
1. Double-check DNS records at registrar
2. Ensure all 4 A records point to GitHub Pages IPs
3. Remove any old/incorrect records

### Issue: CNAME conflict

**Solution**: 
- If using A records, remove any CNAME records for root domain
- Root domain can only have A records OR CNAME, not both

### Issue: "Enforce HTTPS" is grayed out

**Solution**: 
- This is normal until DNS check passes
- Enable HTTPS after DNS is verified

## Verification Checklist

- [ ] DNS records added at domain registrar (4 A records)
- [ ] All 4 A records point to correct GitHub Pages IPs
- [ ] DNS propagation verified (check with dnschecker.org)
- [ ] CNAME file contains: `mohamedharmoush.com`
- [ ] Custom domain set in GitHub Pages settings
- [ ] Clicked "Check again" in GitHub Pages settings
- [ ] DNS check passes ✅
- [ ] HTTPS enabled after DNS check passes

## Quick Test Commands

```bash
# Check if DNS is resolving
dig mohamedharmoush.com +short

# Check all DNS records
dig mohamedharmoush.com ANY +noall +answer

# Check specific record type
dig mohamedharmoush.com A +short
```

## Still Having Issues?

1. **Double-check DNS records** at your registrar
2. **Wait 24-48 hours** for full propagation
3. **Contact your domain registrar** support if DNS records aren't saving
4. **Check GitHub Pages documentation**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Remember**: DNS propagation takes time. Be patient and verify using online tools before checking again in GitHub.

