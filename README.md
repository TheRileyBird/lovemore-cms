# Love More CMS (Strapi)

Backend CMS for the Love More Yoga website managing team members, classes, and retreats.

## 🚀 Local Development

```bash
npm install
npm run develop
```

Visit http://localhost:1337/admin to access the CMS.

## 📦 Deployment

**See [RENDER-DEPLOYMENT.md](./RENDER-DEPLOYMENT.md) for complete Render deployment instructions.**

This CMS deploys to **Render** (free tier) and uses **Netlify Neon database**.

## 🔗 Architecture

```
Frontend (Astro)  →  API  →  Strapi CMS  →  Netlify Neon DB
   Netlify                    Render           Netlify
```

## 📝 Content Types

- **Team Members**: name, title, image, bio, order, active
- **Classes**: name, type, image, description, order, active
- **Retreats**: name, location, image, highlights, description, order, active

All content types have **drag-and-drop ordering** via the `order` field.

## ⚙️ API Permissions

Enable public API access for frontend:
1. Settings → Users & Permissions → Roles → Public
2. Enable `find` and `findOne` for each content type

## 🆓 Free Tier

Render free tier spins down after 15 minutes of inactivity. First access takes 30-50 seconds. This only affects admin access, not your live site.

## 📚 Documentation

- [Strapi Docs](https://docs.strapi.io/)
- [Deployment Guide](./RENDER-DEPLOYMENT.md)
- [Strapi + Astro Guide](https://docs.astro.build/en/guides/cms/strapi/)
