import { z } from 'zod';

// Business requirements schema
export const BusinessRequirementSchema = z.object({
  businessName: z.string().optional(),
  industry: z.string().optional(),
  businessType: z.string().optional(),
  targetAudience: z.string().optional(),
  currentChallenges: z.array(z.string()).optional(),
  goals: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  existingTech: z.string().optional(),
  preferredSolutions: z.array(z.string()).optional(),
  contactInfo: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }).optional(),
});

// AI Business Consultant
export class BusinessConsultant {
  private context: any = {};

  async processMessage(message: string): Promise<{
    response: string;
    requirements: any;
    isComplete: boolean;
    nextQuestions: string[];
    shouldBookCall: boolean;
  }> {
    // Extract requirements from message
    const requirements = this.extractRequirements(message);
    
    // Update context
    this.context = { ...this.context, ...requirements };

    // Generate response
    const response = this.generateResponse(message, this.context);
    
    // Check if we have enough info
    const isComplete = this.checkIfComplete();
    
    return {
      response,
      requirements: this.context,
      isComplete,
      nextQuestions: this.generateNextQuestions(),
      shouldBookCall: isComplete || this.shouldSuggestCall(message),
    };
  }

  private extractRequirements(message: string): any {
    const requirements: any = {};
    const lowerMessage = message.toLowerCase();
    
    // Business name detection
    const businessNamePatterns = [
      /(?:my|our|the)\s+(?:business|company|startup|agency)\s+(?:is\s+)?(?:called\s+)?([a-zA-Z\s]+)/i,
      /(?:i\s+run|i\s+own|we\s+are)\s+([a-zA-Z\s]+)/i,
    ];
    
    for (const pattern of businessNamePatterns) {
      const match = message.match(pattern);
      if (match) {
        requirements.businessName = match[1].trim();
        break;
      }
    }

    // Industry detection
    const industries = [
      'tech', 'technology', 'healthcare', 'finance', 'fintech', 'retail', 
      'ecommerce', 'consulting', 'real estate', 'marketing', 'advertising',
      'education', 'fitness', 'restaurant', 'food', 'travel', 'hospitality'
    ];
    
    const foundIndustry = industries.find(ind => lowerMessage.includes(ind));
    if (foundIndustry) requirements.industry = foundIndustry;

    // Challenge detection
    const challengeKeywords = ['problem', 'challenge', 'issue', 'struggle', 'need', 'want', 'difficult', 'hard'];
    if (challengeKeywords.some(word => lowerMessage.includes(word))) {
      requirements.currentChallenges = [message];
    }

    // Budget detection
    const budgetMatches = message.match(/\$?(\d+(?:,\d{3})*(?:k|thousand|million)?)/i);
    if (budgetMatches) requirements.budget = budgetMatches[0];

    return requirements;
  }

  private generateResponse(message: string, context: any): string {
    const responses = [
      "Got it! I can see you're serious about building something meaningful. ",
      "Perfect - this is exactly the kind of challenge we solve in minutes. ",
      "I love this energy! You're thinking like someone ready to scale. ",
      "This is what we live for - turning your vision into reality instantly. ",
    ];

    const followUps = [
      "What's the one thing that would 10x your business if it worked perfectly?",
      "If I could automate your biggest headache today, what would that be?",
      "What's stopping you from scaling right now?",
      "What would your business look like if everything just... worked?",
    ];

    let response = responses[Math.floor(Math.random() * responses.length)];
    
    if (!context.businessName) {
      response += "What's your business called? ";
    } else if (!context.industry) {
      response += "What industry are you in? ";
    } else if (!context.currentChallenges) {
      response += followUps[Math.floor(Math.random() * followUps.length)];
    } else {
      response += "Based on what you've told me, I can see exactly what you need. Ready to see this built in minutes? ";
    }

    return response;
  }

  private checkIfComplete(): boolean {
    const required = ['businessName', 'currentChallenges'];
    return required.every(field => this.context[field]);
  }

  private generateNextQuestions(): string[] {
    const questions = [];
    
    if (!this.context.businessName) questions.push("What's your business name?");
    if (!this.context.industry) questions.push("What industry are you in?");
    if (!this.context.currentChallenges) questions.push("What's your biggest challenge?");
    if (!this.context.goals) questions.push("What are your main goals?");
    
    return questions.slice(0, 2);
  }

  private shouldSuggestCall(message: string): boolean {
    const callTriggers = ['ready', 'let\'s do it', 'yes', 'book', 'call', 'talk', 'interested'];
    return callTriggers.some(trigger => message.toLowerCase().includes(trigger));
  }
}

// Solution Generator
export class SolutionGenerator {
  generateSolution(requirements: any): {
    solution: string;
    techStack: string[];
    automations: string[];
    timeline: string;
    nextSteps: string[];
  } {
    const { businessName, industry, currentChallenges, budget } = requirements;

    const solution = `
Custom AI-powered solution for ${businessName || 'your business'} in the ${industry || 'technology'} space.
We'll build an automated system that addresses your core challenges: ${currentChallenges?.join(', ') || 'streamlining operations'}.
This includes lead capture, customer management, and process automation tailored to your specific needs.
    `.trim();

    return {
      solution,
      techStack: ["React", "Node.js", "AI Integration", "Automation Tools", "Database"],
      automations: ["Lead capture system", "Customer onboarding flow", "Process automation", "Reporting dashboard"],
      timeline: budget?.includes('1000') || budget?.includes('5000') ? "2-3 business days" : "1-2 business days",
      nextSteps: ["Strategy call booking", "Requirements finalization", "Technical implementation", "Launch & optimization"],
    };
  }
}