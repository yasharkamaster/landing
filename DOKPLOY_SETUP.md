# Quick Dokploy Deployment Guide

## 📋 Prerequisites Checklist
- ✅ Your code is on GitHub: `https://github.com/yasharkamaster/landing.git`
- ✅ Dokploy is running on your server (port 3000)
- ✅ You have Airtable credentials ready

---

## 🚀 Step-by-Step Deployment

### Step 1: Access Dokploy Dashboard
1. Open your browser and go to: `http://your-server-ip:3000`
2. Log in to your Dokploy account

### Step 2: Create New Application
1. Click **"New Application"** or **"Create Project"** button
2. You'll see options for source:
   - Select **"GitHub"** or **"Git Repository"**

### Step 3: Connect GitHub Repository
1. If first time, click **"Connect GitHub"** or **"Authorize GitHub"**
2. Authorize Dokploy to access your GitHub repositories
3. After authorization, you'll see a list of your repositories
4. Select: **`yasharkamaster/landing`**
5. Choose branch: **`main`**

### Step 4: Configure Application Type

**Choose ONE of these options:**

#### Option A: Node.js Deployment (Recommended for simplicity)
- **Application Type:** Select **"Node.js"** or **"Application"**
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Node Version:** 18 (or latest)

#### Option B: Docker Deployment (If you prefer containers)
- **Application Type:** Select **"Docker"**
- Dokploy will automatically detect your `Dockerfile`
- No additional configuration needed

### Step 5: Set Environment Variables

In Dokploy's **Environment Variables** section, add these:

```
PORT=4000
AIRTABLE_TOKEN=your_actual_airtable_token_here
AIRTABLE_BASE_ID=your_actual_base_id_here
AIRTABLE_TABLE_NAME=Leads
```

**How to get Airtable credentials:**
- **AIRTABLE_TOKEN:** Go to Airtable → Account → Developer hub → Create personal access token
- **AIRTABLE_BASE_ID:** Found in your Airtable base URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
- **AIRTABLE_TABLE_NAME:** Usually "Leads" (check your Airtable base)

### Step 6: Configure Port (if needed)
- Dokploy may auto-assign a port
- If you see port settings, you can set it to `4000` or leave it auto
- Your app will use whatever port Dokploy assigns (it reads from `PORT` env var)

### Step 7: Deploy!
1. Click **"Deploy"** or **"Save and Deploy"** button
2. Watch the build logs:
   - Dokploy will clone your repo
   - Run `npm install` (or build Docker image)
   - Start your application
3. Wait for deployment to complete (usually 1-3 minutes)

### Step 8: Access Your Application
Once deployed, Dokploy will show you:
- **Application URL:** Something like `http://your-server-ip:XXXXX` or a custom domain
- **Status:** Should show "Running" or "Active"

---

## 🌐 Access Your Landing Pages

After deployment, your landing pages will be at:

- **Clinic:** `http://your-app-url/Clinic/clinic_landing.html`
- **Food Franchises:** `http://your-app-url/Food_Francises/food_landing.html`
- **Luxury Boutiques:** `http://your-app-url/Luxury_Fashion_Boutiques/luxury_boutique_landing_v2 (1).html`
- **Professional Services:** `http://your-app-url/Professional_Services/Professional_Real.html`
- **Tours & Travels:** `http://your-app-url/Tours_&_Travels/tours_v3.html`

**API Endpoint:**
- **Form Submission:** `http://your-app-url/api/submit`

---

## ✅ Verify Deployment

1. **Check Application Status:**
   - In Dokploy dashboard, your app should show "Running"
   - Check logs for any errors

2. **Test a Landing Page:**
   - Open one of the landing page URLs in your browser
   - The page should load correctly

3. **Test Form Submission:**
   - Fill out a form on a landing page
   - Submit it
   - Check your Airtable base - a new record should appear

---

## 🔄 Updating Your Deployment

When you make changes:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **In Dokploy:**
   - If auto-deploy is enabled, it will redeploy automatically
   - Or click **"Redeploy"** or **"Deploy"** button manually

---

## 🐛 Troubleshooting

### Application Won't Start
- Check Dokploy logs for errors
- Verify all environment variables are set correctly
- Make sure `PORT` environment variable is set

### Can't Access Landing Pages
- Check the application URL in Dokploy dashboard
- Verify the port is correct
- Try accessing: `http://your-app-url/Clinic/clinic_landing.html`

### Form Submissions Not Working
- Check that `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID` are correct
- Verify `AIRTABLE_TABLE_NAME` matches your Airtable table name
- Check Dokploy logs for API errors

### Build Fails
- Check that Node.js version is 18 or higher
- Verify `package.json` is correct
- Check build logs for specific error messages

---

## 📝 Quick Reference

**Repository:** `https://github.com/yasharkamaster/landing.git`  
**Branch:** `main`  
**Port:** `4000` (or auto-assigned by Dokploy)  
**Start Command:** `npm start`  
**Build Command:** `npm install`

---

## 💡 Pro Tips

1. **Enable Auto-Deploy:** In Dokploy settings, enable auto-deploy on push to `main` branch
2. **Custom Domain:** You can set up a custom domain in Dokploy settings
3. **SSL/HTTPS:** Dokploy can automatically set up SSL certificates
4. **Monitoring:** Check Dokploy logs regularly to monitor your application

---

**Need Help?** Check the full deployment guide in `DEPLOYMENT.md` or Dokploy's official documentation.
