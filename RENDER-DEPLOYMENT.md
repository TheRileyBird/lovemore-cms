# Deploy Strapi to Render (Free Tier)

## ✅ What's Ready:

Your Strapi CMS is configured to:
- Use PostgreSQL (your Netlify Neon database)
- Run on Render's free tier
- Handle SSL connections properly

## 🚀 Deployment Steps:

### 1. Push Code to GitHub

First, initialize git and push your Strapi project to GitHub:

```bash
cd /Users/joshuariley/Sites/lovemore-cms

# Initialize git (if not already done)
git init

# Create .gitignore
cat > .gitignore << 'EOF'
############################
# OS X
############################
.DS_Store
.AppleDouble
.LSOverride
Icon
.Spotlight-V100
.Trashes
._*

############################
# Node.js
############################
node_modules/
npm-debug.log
yarn-error.log

############################
# Strapi
############################
.env
license.txt
exports
.cache
dist
build
.strapi-updater.json
.tmp

############################
# Database
############################
*.db*
EOF

# Add all files
git add .

# Commit
git commit -m "Initial Strapi CMS setup for Love More"

# Create GitHub repo and push
# (You'll do this via GitHub web interface or gh CLI)
```

### 2. Create Render Account

1. Go to https://render.com
2. Sign up (free) - use your GitHub account for easy connection

### 3. Create New Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository: `lovemore-cms`
3. Configure:
   - **Name**: `lovemore-strapi`
   - **Environment**: `Node`
   - **Region**: Choose closest to you (or same as Netlify database)
   - **Branch**: `main` or `master`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: **Free** ✅

### 4. Add Environment Variables

In Render's environment variables section, add these:

#### Security Keys (REQUIRED - Copy these exactly):
```
APP_KEYS=UfwidDnOgcjmUsEwrSGw2g==,H0W0aIutY6G5lqQZHOfgJg==,4Nnofl50m8lM94AuBJdCLg==,OqRNktex/x+V9YIiR/jUvg==
API_TOKEN_SALT=vU91DRiuImsGe4KsCNrekg==
ADMIN_JWT_SECRET=n405Aflua2DBkNtnlpcHdg==
TRANSFER_TOKEN_SALT=nwOVRpnQX4Fcs1fVntPm/w==
JWT_SECRET=Z13S77Ohj4wusbCaYeJgxg==
```

#### Database Configuration:
```
DATABASE_CLIENT=postgres
DATABASE_URL=[YOUR_NETLIFY_DATABASE_URL]
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

**IMPORTANT**: Get your `NETLIFY_DATABASE_URL` from:
- Netlify Dashboard → Your Site → Environment Variables
- Copy the `NETLIFY_DATABASE_URL` value
- Paste it into Render's `DATABASE_URL` field

#### Server Configuration:
```
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
```

### 5. Deploy!

1. Click **"Create Web Service"**
2. Render will automatically:
   - Install dependencies
   - Build Strapi
   - Start the server
3. Wait 3-5 minutes for first deployment

### 6. Access Your CMS

Once deployed, you'll get a URL like: `https://lovemore-strapi.onrender.com`

1. Visit: `https://lovemore-strapi.onrender.com/admin`
2. **First visit takes 30-50 seconds** (free tier cold start)
3. Create your admin account
4. Start adding content!

### 7. Update Astro to Use Production Strapi

In your Astro project (`/Users/joshuariley/Sites/lovemore`):

Update `.env`:
```bash
STRAPI_URL=https://lovemore-strapi.onrender.com
```

Add to Netlify environment variables:
```
STRAPI_URL=https://lovemore-strapi.onrender.com
```

## ⚡ Important Notes About Free Tier:

### Cold Starts:
- **Spins down after 15 minutes** of inactivity
- **Cold start takes 30-50 seconds** when you access it
- After cold start, runs at normal speed

### This means:
- First time you open `/admin` each session: Wait ~30-50 seconds
- While editing content: Normal, fast performance
- Your live website (Astro): Always fast (it caches data during build)

### Is this OK?
For a CMS you don't access 24/7, the free tier works great! You only notice the delay when YOU open the admin panel after not using it for 15+ minutes.

## 🔧 Troubleshooting:

### Build Fails:
- Check that all environment variables are set correctly
- Verify `DATABASE_URL` is from Netlify
- Check Render build logs for specific errors

### Can't Connect to Database:
- Verify `DATABASE_URL` is correct
- Check `DATABASE_SSL=true`
- Ensure `DATABASE_SSL_REJECT_UNAUTHORIZED=false`

### 404 on /admin:
- Wait for cold start (30-50 seconds)
- Check Render service is running (not failed)
- Check Render logs for errors

## 📝 Next Steps After Deployment:

1. ✅ Create admin account
2. ✅ Add your content (team members, classes, retreats)
3. ✅ Enable API permissions (Settings → Roles → Public)
4. ✅ Update Astro's STRAPI_URL to production
5. ✅ Test your Astro site locally with production CMS
6. ✅ Deploy Astro to Netlify

## 💰 Cost:

**$0/month** - Completely free!

You're only using:
- Render free tier (your Strapi server)
- Netlify free tier (your Astro site)
- Netlify Neon DB (already included)

Total: **FREE** ✨
