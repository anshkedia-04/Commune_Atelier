import React, { createContext, useContext, useState } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  pendingPrompt: string | null;
  openChat: (initialPrompt?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  clearPendingPrompt: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const openChat = (initialPrompt?: string) => {
    if (initialPrompt) {
      setPendingPrompt(initialPrompt);
    }
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const clearPendingPrompt = () => {
    setPendingPrompt(null);
  };

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        pendingPrompt,
        openChat,
        closeChat,
        toggleChat,
        clearPendingPrompt,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = (): ChatbotContextType => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
