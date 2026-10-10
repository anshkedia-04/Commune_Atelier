import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info';
}

interface ToastContextType {
  showToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, description?: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, description, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        pointerEvents: 'none'
      }}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              style={{
                pointerEvents: 'auto',
                minWidth: '320px',
                maxWidth: '420px',
                backgroundColor: 'rgba(24, 22, 20, 0.96)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201, 168, 106, 0.35)',
                boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
                padding: '1rem 1.25rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.9rem',
                color: '#f8f6f0'
              }}
            >
              <div style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
                {toast.type === 'success' ? <CheckCircle2 size={18} /> : <Info size={18} />}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#f8f6f0'
                }}>
                  {toast.title}
                </h4>
                {toast.description && (
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.2rem',
                    lineHeight: 1.4
                  }}>
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                style={{
                  color: 'var(--text-muted)',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: '2px'
                }}
                aria-label="Close notification"
              >
                <X size={15} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
