# Deployment Notes for Blog 404 Fix

## Issue Summary
The blog posts are returning 404 errors in production but working locally. This is caused by several factors:

1. Different handling of dynamic parameters between development and production
2. Missing Sanity token for better API access in production
3. Caching issues with the Sanity CDN

## Steps to Fix in Production

### 1. Add Sanity API Token

Create a read-only API token in the Sanity management console:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to API > Tokens
4. Create a new token with "Viewer" permissions
5. Add this token to your Vercel environment variables as `SANITY_API_TOKEN`

### 2. Deploy with Force Rebuild

Deploy with a complete rebuild to ensure all changes take effect:
```bash
# If using Vercel CLI
vercel --prod --force
```

Or trigger a fresh deployment from the Vercel dashboard with "Clear Cache and Deploy" option.

### 3. Verify Logs in Production

After deploying, check the Vercel logs to see if the detailed logging we added is showing any specific errors.

### 4. Consider ISR Instead of SSG

If issues persist, consider using Incremental Static Regeneration instead of pure Static Site Generation:
- The `revalidate` parameter is already set to 60 seconds
- This should help with dynamic content that changes frequently

## Long-term Solutions

1. Consider implementing a Webhook from Sanity to trigger rebuilds when content changes
2. Add better error handling for 404 cases with custom error pages
3. Implement proper logging in production to catch these issues earlier 