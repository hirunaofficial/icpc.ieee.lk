# Analytics Setup Guide

This document explains how to set up analytics tracking for the ICPC Sri Lanka website.

## Google Analytics 4 Setup

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account and property for the ICPC website

### 2. Get Your Measurement ID

1. In Google Analytics, go to Admin (gear icon)
2. Select your property
3. Under "Data Streams", click on your web stream
4. Copy the "Measurement ID" (format: G-XXXXXXXXXX)

### 3. Configure the Website

1. Create a `.env.local` file in the project root (use `.env.local.example` as a template)
2. Add your Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Restart the development server

### 4. Verify Analytics is Working

1. Visit your website
2. In Google Analytics, go to "Realtime" → "Overview"
3. You should see your visit tracked in real-time

## Custom Event Tracking

The website includes a custom hook for tracking events:

```javascript
import { useAnalytics } from '@/components/Analytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('button_click', {
      button_name: 'register',
      page: '/registration'
    });
  };

  return <button onClick={handleClick}>Register</button>;
}
```

## Recommended Events to Track

Here are some suggested custom events for the ICPC website:

1. **Registration Started**
   - Event: `registration_started`
   - Parameters: `{ form_type: 'preliminary' | 'regional' }`

2. **External Link Clicked**
   - Event: `external_link_click`
   - Parameters: `{ link_url, link_text }`

3. **Gallery Image Viewed**
   - Event: `gallery_image_view`
   - Parameters: `{ image_id }`

4. **FAQ Expanded**
   - Event: `faq_expanded`
   - Parameters: `{ question_category, question_text }`

5. **Social Media Click**
   - Event: `social_click`
   - Parameters: `{ platform: 'facebook' | 'instagram' | etc }`

## Privacy Considerations

- Google Analytics is configured to respect user privacy
- No personally identifiable information (PII) is tracked
- Consider adding a cookie consent banner for GDPR compliance
- Update the privacy policy to mention analytics tracking

## Alternative Analytics Tools

If you prefer privacy-focused analytics, consider:

- **Plausible** - Simple, privacy-friendly analytics
- **Umami** - Self-hosted, GDPR-compliant
- **Fathom** - Privacy-first analytics

To use alternative tools, update `src/components/Analytics.js` accordingly.

## Troubleshooting

### Analytics not showing up

1. Check that `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. Verify the Measurement ID format (should start with G-)
3. Clear browser cache and restart dev server
4. Check browser console for errors
5. Ensure ad blockers are disabled while testing

### Testing in Development

Analytics works in both development and production. However, consider:

1. Using a separate GA property for development/staging
2. Filtering out internal traffic in GA settings
3. Using GA's debug mode for development

## Production Deployment

When deploying to production:

1. Add the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable to your hosting platform
2. For GitHub Pages with static export, ensure the environment variable is available during build
3. Test analytics in production after deployment

