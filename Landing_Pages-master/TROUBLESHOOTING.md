# Troubleshooting: Connection Refused Error

## Error: `ERR_CONNECTION_REFUSED` on `165.232.187.10:4000`

This means the server isn't accepting connections. Here's how to fix it:

---

## ✅ Step 1: Check Application Status in Dokploy

1. **Go to Dokploy Dashboard**
2. **Find your application** in the list
3. **Check the status:**
   - Should show "Running" or "Active"
   - If it shows "Stopped" or "Error", that's the problem

---

## ✅ Step 2: Verify the Correct URL/Port

**Important:** Dokploy might NOT be using port 4000 directly!

### Option A: Check Dokploy's Assigned URL
1. In Dokploy dashboard, look for your application's **URL** or **Endpoint**
2. Dokploy might provide a URL like:
   - `http://165.232.187.10:XXXXX` (different port)
   - `http://your-app-name.dokploy.local`
   - A custom domain

### Option B: Check Port Mapping
1. In Dokploy, go to your application settings
2. Look for **"Port"** or **"Port Mapping"** section
3. Note the port number Dokploy assigned (might be different from 4000)

---

## ✅ Step 3: Check Application Logs

1. In Dokploy dashboard, click on your application
2. Go to **"Logs"** or **"Container Logs"** tab
3. Look for:
   - `Server running on port XXXX` (note the port number)
   - Any error messages
   - If you see errors, share them

---

## ✅ Step 4: Verify Environment Variables

Make sure these are set in Dokploy:
- `PORT=4000` (or whatever port Dokploy assigned)
- `AIRTABLE_TOKEN=your_token`
- `AIRTABLE_BASE_ID=your_base_id`
- `AIRTABLE_TABLE_NAME=Leads`

---

## ✅ Step 5: Redeploy After Fix

Since we just fixed the server.js file:
1. In Dokploy, click **"Redeploy"** or **"Deploy"** button
2. Wait for deployment to complete
3. Check logs to confirm it started successfully

---

## ✅ Step 6: Test the Root URL First

Try accessing just the root:
- `http://165.232.187.10:XXXXX/` (use the port from Dokploy)

You should see a JSON response like:
```json
{
  "status": "ok",
  "message": "Landing Pages Server is running"
}
```

---

## 🔍 Common Issues & Solutions

### Issue 1: Application Not Running
**Solution:** 
- Check if container is running in Dokploy
- Restart/Redeploy the application
- Check logs for startup errors

### Issue 2: Wrong Port
**Solution:**
- Don't assume it's port 4000
- Check Dokploy's assigned port
- Use the URL Dokploy provides

### Issue 3: Firewall/Security Group
**Solution:**
- If using a cloud server, check security groups/firewall rules
- Ensure the port is open for incoming connections
- Dokploy might need to configure this

### Issue 4: Application Crashed
**Solution:**
- Check logs for error messages
- Verify environment variables are correct
- Make sure all dependencies installed correctly

---

## 📋 Quick Checklist

- [ ] Application status shows "Running" in Dokploy
- [ ] Checked logs - no errors visible
- [ ] Using the correct port from Dokploy (not assuming 4000)
- [ ] Environment variables are set correctly
- [ ] Redeployed after the server.js fix
- [ ] Firewall/security groups allow the port
- [ ] Tried accessing root URL first (`/`)

---

## 🆘 Still Not Working?

Share these details:
1. **Application Status** in Dokploy (Running/Stopped/Error)
2. **Port Number** shown in Dokploy
3. **Logs** from the application (last 20-30 lines)
4. **URL** Dokploy provides for your application
