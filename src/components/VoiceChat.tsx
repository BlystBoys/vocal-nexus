
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const VoiceChat: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = async () => {
    if (!apiKey) {
      setResponse('Please enter your ElevenLabs API key');
      return;
    }

    if (!message.trim()) {
      setResponse('Please enter a message');
      return;
    }

    setIsProcessing(true);
    setResponse('Processing your message...');

    try {
      // This is a placeholder for actual ElevenLabs API integration
      // In a real implementation, you would use the API key to make a request
      setTimeout(() => {
        setResponse(`Voice response would play here for: "${message}"`);
        setIsProcessing(false);
      }, 1500);
    } catch (error) {
      setResponse('Error processing your message. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">Voice Chat</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="api-key" className="text-sm font-medium">
            ElevenLabs API Key
          </label>
          <Input
            id="api-key"
            type="password"
            placeholder="Enter your API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <Input
            id="message"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button 
          className="w-full" 
          onClick={handleSendMessage}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Send Message'}
        </Button>

        {response && (
          <div className="mt-4 p-3 bg-slate-100 rounded-md">
            <p className="text-sm">{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VoiceChat;
