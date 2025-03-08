
import React from "react";
import VoiceChat from "../components/VoiceChat";

const Index: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Voice Chat Application</h1>
      <p className="text-center mb-8 text-gray-600">
        Use this application to interact with ElevenLabs voice technology
      </p>
      <VoiceChat />
    </div>
  );
};

export default Index;
