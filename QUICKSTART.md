# 🚀 Quick Start: Deploy to Render

## ✅ What's Ready:
- Strapi CMS configured for PostgreSQL ✓
- Database config set up for Netlify Neon ✓
- Security keys generated ✓
- Render deployment config created ✓

## 📋 Deployment Checklist (10 minutes):

### 1. Push to GitHub (2 min)
```bash
cd /Users/joshuariley/Sites/lovemore-cms

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial Strapi CMS setup for Love More"

# Create repo on GitHub (github.com/new)
# Name it: lovemore-cms

# Push
git remote add origin https://github.com/YOUR_USERNAME/lovemore-cms.git
git branch -M main
git push -u origin main
```

### 2. Get Your Database URL (1 min)
1. Go to Netlify Dashboard
2. Your site → Environment Variables
3. Copy the `NETLIFY_DATABASE_URL` value
4. **Save this - you'll need it in step 4**

### 3. Create Render Service (2 min)
1. Go to https://render.com/signup
2. Sign up (free) - use GitHub account
3. Click **"New +"** → **"Web Service"**
4. Connect to your `lovemore-cms` repo
5. Configure:
   - Name: `lovemore-strapi`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - **Plan: Free** ✓

### 4. Add Environment Variables (3 min)

In Render's environment tab, add these **exactly**:

```env
# Security (copy these exactly)
APP_KEYS=UfwidDnOgcjmUsEwrSGw2g==,H0W0aIutY6G5lqQZHOfgJg==,4Nnofl50m8lM94AuBJdCLg==,OqRNktex/x+V9YIiR/jUvg==
API_TOKEN_SALT=vU91DRiuImsGe4KsCNrekg==
ADMIN_JWT_SECRET=n405Aflua2DBkNtnlpcHdg==
TRANSFER_TOKEN_SALT=nwOVRpnQX4Fcs1fVntPm/w==
JWT_SECRET=Z13S77Ohj4wusbCaYeJgxg==

# Database (paste YOUR Netlify database URL)
DATABASE_CLIENT=postgres
DATABASE_URL=YOUR_NETLIFY_DATABASE_URL_HERE
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Server
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
```

**IMPORTANT**: Replace `YOUR_NETLIFY_DATABASE_URL_HERE` with the URL you copied in step 2!

### 5. Deploy! (2 min)
1. Click **"Create Web Service"**
2. Wait for deployment (3-5 minutes)
3. You'll get a URL like: `https://lovemore-strapi.onrender.com`

### 6. Access Your CMS (1 min)
1. Visit: `https://lovemore-strapi.onrender.com/admin`
2. **First load takes 30-50 seconds** (cold start)
3. Create admin account
4. Done!

## ⚡ About Cold Starts:

**Free tier spins down after 15 minutes** of no use.

This means:
- ✅ Your live website is always fast
- ⏱️ Opening the CMS admin after 15+ min: Wait 30-50 seconds
- ✅ While you're editing: Normal, fast speed

For a CMS you don't use 24/7, this is perfect!

## 🔄 Next Steps After Deployment:

1. Create admin account in Strapi
2. Enable API permissions (Settings → Roles → Public)
3. Add content (team members, classes, retreats)
4. Update Astro's `STRAPI_URL` to your Render URL
5. Test locally, then deploy Astro to Netlify

## 💰 Total Cost:

**$0/month** - Completely free!

## 📖 Need More Help?

See [RENDER-DEPLOYMENT.md](./RENDER-DEPLOYMENT.md) for detailed instructions and troubleshooting.

## ✨ Enjoy Your New CMS!

You'll love the drag-and-drop ordering, instant image previews, and clean UI!
