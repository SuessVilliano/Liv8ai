import { Express, Request, Response } from 'express';
import { BusinessConsultant, SolutionGenerator } from './genkit-config';

const consultant = new BusinessConsultant();
const solutionGen = new SolutionGenerator();

export function registerAIRoutes(app: Express) {
  // AI Chat endpoint
  app.post('/api/ai/chat', async (req: Request, res: Response) => {
    try {
      const { message, context } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const result = await consultant.processMessage(message);
      res.json(result);
    } catch (error) {
      console.error('AI chat error:', error);
      res.status(500).json({ error: 'Failed to process AI request' });
    }
  });

  // Solution generation endpoint
  app.post('/api/ai/generate-solution', async (req: Request, res: Response) => {
    try {
      const requirements = req.body;
      const solution = solutionGen.generateSolution(requirements);

      // Save to webhook for Google Sheets integration
      await fetch('/api/webhook/business-requirements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirements, solution })
      }).catch(console.error);

      res.json(solution);
    } catch (error) {
      console.error('Solution generation error:', error);
      res.status(500).json({ error: 'Failed to generate solution' });
    }
  });

  // Webhook endpoint for Google Sheets integration
  app.post('/api/webhook/business-requirements', async (req: Request, res: Response) => {
    try {
      const { requirements, solution } = req.body;

      console.log('📊 Business Requirements Captured:', {
        business: requirements.businessName,
        industry: requirements.industry,
        challenges: requirements.currentChallenges,
        timestamp: new Date().toISOString()
      });

      console.log('🚀 Generated Solution:', {
        solution: solution.solution,
        timeline: solution.timeline,
        automations: solution.automations
      });

      // This would integrate with Google Sheets API using user's credentials
      // await sendToGoogleSheets(requirements, solution);

      res.json({ success: true, message: 'Requirements captured and solution generated' });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Failed to save requirements' });
    }
  });
}