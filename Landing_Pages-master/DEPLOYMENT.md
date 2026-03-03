# Deployment Guide for Dokploy

This guide will help you deploy your landing pages ExpressJS application to Dokploy via GitHub.

## Prerequisites

1. GitHub account and repository
2. Dokploy instance running on your server (port 3000)
3. Airtable credentials (Token, Base ID, Table Name)
4. Docker (optional - for containerized deployment)

## Step 1: Prepare Your GitHub Repository

### 1.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Landing pages with ExpressJS"
```

### 1.2 Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it something like `landing-pages` or `express-landing-pages`
3. **Do NOT initialize with README** (you already have files)

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Important:** Make sure your `.env` file is NOT committed (it's already in `.gitignore`)

## Step 2: Configure Dokploy

### 2.1 Access Dokploy Dashboard
- Open your Dokploy instance (usually at `http://your-server-ip:3000`)
- Log in to your Dokploy account

### 2.2 Create New Application
1. Click on **"New Application"** or **"Create Project"**
2. Select **"GitHub"** as the source
3. Connect your GitHub account (if not already connected)
4. Select your repository from the list
5. Choose the branch (usually `main` or `master`)

### 2.3 Configure Application Settings

**Application Type:** Node.js (or Docker if you prefer containerized deployment)

**Option A: Node.js Deployment**
- **Build Command:** (usually auto-detected, but you can set)
  ```bash
  npm install
  ```
- **Start Command:**
  ```bash
  npm start
  ```

**Option B: Docker Deployment**
- Dokploy can automatically detect the `Dockerfile` in your repository
- **Dockerfile:** Already included in the repository
- **Build Context:** Root directory
- Dokploy will build and run the Docker container automatically

**Port Configuration:**
- Dokploy will automatically set the `PORT` environment variable
- Your app will use whatever port Dokploy assigns (usually not 3000 for the app itself)
- The default port in your code (4000) is only used if `PORT` env var is not set

### 2.4 Set Environment Variables

In Dokploy's environment variables section, add:

```
PORT=4000
AIRTABLE_TOKEN=patXXXXXXXXXXXXXXXXxxxxxxxx
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Leads
```

**Important Notes:**
- Replace the placeholder values with your actual Airtable credentials
- `PORT` can be set to any available port (4000, 3001, 5000, etc.)
- Dokploy may override the PORT variable, which is fine - it will use the assigned port

## Step 3: Deploy

1. Click **"Deploy"** or **"Save and Deploy"**
2. Dokploy will:
   - Clone your repository
   - Run `npm install`
   - Start your application with `npm start`
3. Wait for the deployment to complete (check logs if needed)

## Step 4: Access Your Landing Pages

Once deployed, Dokploy will provide you with a URL. Your landing pages will be accessible at:

- **Clinic Landing:** `http://your-dokploy-url/Clinic/clinic_landing.html`
- **Food Franchises:** `http://your-dokploy-url/Food_Francises/food_landing.html`
- **Luxury Fashion Boutiques:** `http://your-dokploy-url/Luxury_Fashion_Boutiques/luxury_boutique_landing_v2 (1).html`
- **Professional Services:** `http://your-dokploy-url/Professional_Services/Professional_Real.html`
- **Tours & Travels:** `http://your-dokploy-url/Tours_&_Travels/tours_v3.html`

## Step 5: Verify API Endpoint

Test that your Airtable integration works:
- The API endpoint should be: `http://your-dokploy-url/api/submit`
- Test with a form submission from one of your landing pages

## Troubleshooting

### Port Conflicts
- If you see port conflicts, Dokploy will automatically assign a different port
- Your app reads `process.env.PORT`, so it will use whatever Dokploy provides
- The default 4000 in your code is just a fallback

### Environment Variables Not Working
- Make sure you've set all environment variables in Dokploy's dashboard
- Restart the application after adding new environment variables
- Check Dokploy logs for any errors

### Folder Names with Spaces
- ExpressJS handles folder names with spaces automatically
- URLs will be encoded (e.g., `Food%20Francises` becomes `Food Francises`)
- No changes needed in your code

### Build Errors
- Check that Node.js version is >= 18.0.0 (as specified in package.json)
- Verify all dependencies are in package.json
- Check Dokploy build logs for specific errors

## Local Development

### Option 1: Direct Node.js
To run locally:
```bash
npm install
npm run dev
# or
npm start
```

The server will run on port 4000 (or whatever PORT is set in .env)

### Option 2: Docker
To run with Docker:
```bash
# Build the Docker image
docker build -t landing-pages .

# Run the container
docker run -p 4000:4000 --env-file .env landing-pages
```

Or using docker-compose (if you create a docker-compose.yml):
```bash
docker-compose up
```

## Updating Your Deployment

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Dokploy will automatically detect the push and redeploy (if auto-deploy is enabled)
4. Or manually trigger a redeploy from Dokploy dashboard

## Important Notes

- **Never commit `.env` file** - it's already in `.gitignore`
- **Always use environment variables** in Dokploy dashboard for sensitive data
- **Folder names with spaces** work fine - Express handles them automatically
- **Port 3000** is for Dokploy itself, your app will run on a different port assigned by Dokploy
