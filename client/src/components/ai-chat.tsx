import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, Sparkles, Calendar } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  requirements: any;
  isComplete: boolean;
  nextQuestions: string[];
  shouldBookCall: boolean;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! I'm here to help build your business solution in minutes. What's your biggest challenge right now?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);
  const [requirements, setRequirements] = useState<any>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue, context: requirements })
      });

      if (!response.ok) throw new Error('Failed to get AI response');
      
      const data: ChatResponse = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setRequirements(data.requirements || {});
      
      if (data.shouldBookCall || data.isComplete) {
        setShowBookCall(true);
      }

    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Let's book a quick call instead so I can help you directly!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setShowBookCall(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBookCall = () => {
    window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-cyan-400/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-cyan-400">
          <Bot className="h-5 w-5" />
          AI Business Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Tell me about your business and I'll build you a solution in minutes
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Messages */}
        <div className="h-96 overflow-y-auto space-y-4 p-4 bg-background/50 rounded-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                <div className="flex items-start gap-2">
                  {!message.isUser && <Bot className="h-4 w-4 mt-0.5 text-cyan-400" />}
                  {message.isUser && <User className="h-4 w-4 mt-0.5" />}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-cyan-400" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tell me about your business challenge..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Book Call CTA */}
        {showBookCall && (
          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-400/20">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Ready to Build?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I've captured your requirements. Let's jump on a quick call and build this solution live!
              </p>
              <Button
                onClick={handleBookCall}
                className="bg-cyan-400 text-black hover:bg-cyan-300 w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Your Creative Makeover Call
              </Button>
            </div>
          </div>
        )}

        {/* Requirements Summary */}
        {Object.keys(requirements).length > 0 && (
          <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border">
            <h4 className="text-sm font-semibold mb-2 text-cyan-400">Captured Info:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              {requirements.businessName && (
                <div>Business: {requirements.businessName}</div>
              )}
              {requirements.industry && (
                <div>Industry: {requirements.industry}</div>
              )}
              {requirements.currentChallenges && (
                <div>Challenge: {requirements.currentChallenges[0]}</div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}