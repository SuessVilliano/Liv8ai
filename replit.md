# LIV8AI - AI Consulting Agency Website

## Project Overview
A modern AI agency website for LIV8AI showcasing innovative digital services through an interactive web experience with VR-style portfolio and affiliate tracking system.

## Tech Stack
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (MemStorage)
- **Routing**: Wouter
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: MakeForms integration
- **Scheduling**: TidyCal integration
- **Affiliate Tracking**: PushLap Growth

## Current Features
- ✅ Modern responsive design with dark/light theme
- ✅ VR-style portfolio showcase with 22+ live platforms
- ✅ AI chatbot integration (LIV8AI staff deployment)
- ✅ MakeForms popup integration for lead capture
- ✅ YouTube video integration for engagement
- ✅ Immersive portfolio universe with 3D cards
- ✅ Mobile-optimized layouts

## Architecture
- **Client**: React SPA with component-based architecture
- **Server**: Express.js API with route handlers
- **Shared**: TypeScript schemas and types
- **Storage**: In-memory data storage with IStorage interface
- **Styling**: Tailwind CSS with custom CSS variables for theming

## Recent Changes
**2025-01-30**: ✅ Completed affiliate tracking system with Google Tag Manager
- ✅ Created new appointment confirmation page (/appointment-confirmed) with dual tracking
- ✅ Enhanced conversion tracking with both PushLap Growth and Google Tag Manager
- ✅ Added Google Tag Manager (GTM-5J6K6Q8S) to all pages - head and body tags
- ✅ Fixed footer Link import error - affiliate links now functional
- ✅ Updated TidyCal URL to correct "liv8/claritycall" with proper embed code
- ✅ Updated phone number from placeholder to real number (404) 495-5397
- ✅ Enhanced MakeForms error handling to prevent runtime popup errors
- ✅ Added PushLap Growth affiliate tracking script to all pages (Program ID: 9acd7ded-50dc-4b98-b698-c78edc0481b3)
- ✅ Created affiliate page (/affiliate) with direct PushLap Growth registration
- ✅ Enhanced book-a-call page with MakeForms embedded form (ID: 685197ffe60395ec724f4244)
- ✅ Built schedule page with TidyCal integration (jamaur-smith/ai-strategy-call)
- ✅ Created thank-you page with conversion tracking and email instructions
- ✅ Added affiliate program and login links to footer for easy access
- ✅ Implemented complete funnel flow with dual tracking (GTM + PushLap)
- ✅ LocalStorage fallback for cross-page email/name tracking

## Affiliate System Flow
1. **Affiliate Page** (/affiliate) → Direct link to PushLap Growth registration
2. **Book-a-Call** (/book-a-call) → MakeForms embedded form (ID: 685197ffe60395ec724f4244)
3. **Form Submitted** (/form-submitted) → Auto-redirects to schedule after tracking
4. **Schedule** (/schedule) → TidyCal scheduler (liv8ai/ai-strategy-call)
5. **Thank You** (/thank-you) → Final conversion tracking and instructions

## Configuration URLs for External Services

### MakeForms Configuration
- **Form ID**: 685197ffe60395ec724f4244
- **Redirect URL**: `https://your-domain.com/form-submitted`
- **Note**: Configure form to redirect to /form-submitted page after submission

### TidyCal Configuration  
- **Scheduler URL**: sqr.co/ClarityCall (liv8/claritycall)
- **Redirect After Booking**: `https://liv8ai.com/appointment-confirmed?email={{email}}&name={{name}}`
- **Note**: Configure TidyCal to pass email and name parameters for affiliate tracking

### Complete Funnel Flow
**Option A - Full Funnel:**
1. Homepage → Book Strategy Call button → /book-a-call
2. /book-a-call → MakeForms submission → /form-submitted  
3. /form-submitted → Auto-redirect (3s) → /schedule
4. /schedule → TidyCal booking → /thank-you
5. /thank-you → Conversion tracking complete

**Option B - Direct Routing (Recommended):**
1. MakeForms → Direct redirect to TidyCal
2. TidyCal → Direct redirect to /appointment-confirmed
3. /appointment-confirmed → Dual conversion tracking (PushLap + GTM)

## User Preferences
- Modern, futuristic VR-style design aesthetic
- High-converting funnel pages for affiliate recruitment
- Mobile-first responsive design
- Clean, professional interface with immersive elements
- Focus on lead generation and conversion optimization

## Environment Variables
- Form integrations and scheduling handled via embedded scripts
- No external API keys required for core functionality