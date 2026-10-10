import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, RotateCcw, ArrowRight } from 'lucide-react';
import { useChatbot } from '../../context/ChatbotContext';
import { useInterestModal } from '../../context/InterestModalContext';
import { getAIResponse, type ChatMessage } from '../../utils/aiResponseEngine';
import { formatINR } from '../../utils/formatPrice';
import styles from './AIChatbot.module.css';

const STARTER_PROMPTS = [
  'Help me furnish my living room.',
  'Show me modern wooden furniture.',
  'Find a sofa for a small apartment.',
  'Help me choose furniture under ₹50,000.',
  'Tell me about custom finishes & Studio.',
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-init',
  sender: 'ai',
  text: "Hello! I'm your Furniture Assistant. Let's find the perfect pieces for your space.",
  timestamp: 'Just now',
};

export const AIChatbot: React.FC = () => {
  const { isOpen, toggleChat, closeChat, pendingPrompt, clearPendingPrompt } = useChatbot();
  const { openInterestModal } = useInterestModal();
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic thinking duration
    setTimeout(() => {
      const response = getAIResponse(userText);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        recommendedProducts: response.recommendedProducts,
        actionSuggestion: response.actionSuggestion,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  // Handle external pending prompt
  useEffect(() => {
    if (pendingPrompt && isOpen) {
      handleSendMessage(pendingPrompt);
      clearPendingPrompt();
    }
  }, [pendingPrompt, isOpen]);

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setIsTyping(false);
  };

  return (
    <div className={styles.chatFloatWrapper}>
      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerInfo}>
                <div className={styles.avatarCircle}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className={styles.headerTitle}>Commune AI Stylist</h3>
                  <div className={styles.headerStatus}>
                    <span className={styles.statusDot} />
                    <span>Intelligent Showroom Guide</span>
                  </div>
                </div>
              </div>

              <div className={styles.headerActions}>
                <button
                  onClick={handleResetChat}
                  className={styles.headerBtn}
                  title="Clear conversation"
                  aria-label="Restart chat"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={closeChat}
                  className={styles.headerBtn}
                  title="Close assistant"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className={styles.messagesStream}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${
                    msg.sender === 'user' ? styles.msgUser : styles.msgAI
                  }`}
                >
                  <div className={styles.bubble}>{msg.text}</div>

                  {/* Embedded Recommended Product Cards */}
                  {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                    <div className={styles.productCardsList}>
                      {msg.recommendedProducts.map((prod) => (
                        <div key={prod.id} className={styles.chatProductCard}>
                          <img
                            src={prod.images[0]}
                            alt={prod.name}
                            className={styles.chatProductImg}
                          />
                          <div className={styles.chatProductInfo}>
                            <h4 className={styles.chatProductName}>{prod.name}</h4>
                            <span className={styles.chatProductPrice}>
                              {prod.isPriceOnRequest
                                ? 'Price on Request'
                                : formatINR(prod.price)}
                            </span>
                          </div>
                          <div className={styles.chatProductActions}>
                            <button
                              onClick={() => {
                                closeChat();
                                navigate(`/product/${prod.slug}`);
                              }}
                              className={styles.chatDetailLink}
                              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                              Details
                            </button>
                            <button
                              onClick={() => openInterestModal(prod)}
                              className={styles.chatInterestBtn}
                              title="Express Interest"
                            >
                              Inquire
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contextual Action Button */}
                  {msg.actionSuggestion && (
                    <button
                      onClick={() => {
                        if (msg.actionSuggestion?.route) {
                          closeChat();
                          navigate(msg.actionSuggestion.route);
                        }
                      }}
                      className={styles.actionSuggestionBtn}
                    >
                      <span>{msg.actionSuggestion.label}</span>
                      <ArrowRight size={13} />
                    </button>
                  )}

                  <span className={styles.timeTag}>{msg.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className={`${styles.messageRow} ${styles.msgAI}`}>
                  <div className={`${styles.bubble} ${styles.typingIndicator}`}>
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Clickable Starter Prompts Drawer */}
            <div className={styles.promptsDrawer}>
              <span className={styles.promptsLabel}>Suggested Inquiries</span>
              <div className={styles.promptsList}>
                {STARTER_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className={styles.promptChip}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className={styles.inputArea}
            >
              <input
                type="text"
                placeholder="Ask about materials, budget, rooms..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className={styles.chatInput}
                aria-label="Type message to AI Furniture Assistant"
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={!inputText.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circular Toggle Button */}
      <button
        onClick={toggleChat}
        className={styles.floatingTriggerBtn}
        aria-label="Toggle AI Furniture Assistant"
        title="Open AI Furniture Stylist"
      >
        <span className={styles.pulsingRing} />
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>
    </div>
  );
};
