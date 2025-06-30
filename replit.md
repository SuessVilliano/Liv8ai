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
**2025-01-30**: ✅ Completed affiliate tracking system
- ✅ Added PushLap Growth affiliate tracking script to all pages
- ✅ Created affiliate page (/affiliate) with direct PushLap Growth registration
- ✅ Enhanced book-a-call page with MakeForms embedded form (ID: 685197ffe60395ec724f4244)
- ✅ Built schedule page with TidyCal integration (liv8ai/ai-strategy-call)
- ✅ Created thank-you page with conversion tracking and email instructions
- ✅ Added affiliate login link to navbar
- ✅ Implemented complete funnel flow with affiliate tracking at each step
- ✅ LocalStorage fallback for cross-page email/name tracking

## Affiliate System Flow
1. **Affiliate Page** → Direct link to PushLap Growth
2. **Book-a-Call** → MakeForms embedded form
3. **Schedule** → TidyCal embedded scheduler
4. **Thank You** → Confirmation page with email instructions

## User Preferences
- Modern, futuristic VR-style design aesthetic
- High-converting funnel pages for affiliate recruitment
- Mobile-first responsive design
- Clean, professional interface with immersive elements
- Focus on lead generation and conversion optimization

## Environment Variables
- Form integrations and scheduling handled via embedded scripts
- No external API keys required for core functionality