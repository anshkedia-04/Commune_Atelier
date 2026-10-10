import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';
import { useInterestModal } from '../../context/InterestModalContext';
import { useToast } from '../../context/ToastContext';
import { formatINR } from '../../utils/formatPrice';
import styles from './InterestModal.module.css';

export const InterestModal: React.FC = () => {
  const { isOpen, selectedProduct, closeInterestModal } = useInterestModal();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [finishPreference, setFinishPreference] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !selectedProduct) return null;

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit contact number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate successful submission locally
    setIsSubmitted(true);
    showToast(
      'Private Inquiry Registered (Demo)',
      `Our concierge has logged your interest in ${selectedProduct.name}.`,
      'success'
    );
  };

  const handleResetAndClose = () => {
    setName('');
    setPhone('');
    setEmail('');
    setFinishPreference('');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
    closeInterestModal();
  };

  return (
    <AnimatePresence>
      <div className={styles.modalBackdrop} onClick={handleResetAndClose}>
        <motion.div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
        >
          <button
            className={styles.closeBtn}
            onClick={handleResetAndClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <>
              <div className="eyebrow-tag">Private Atelier Inquiry</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.4rem' }}>
                Express Interest in <em>{selectedProduct.name}</em>
              </h2>
              <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Speak with our furniture curators regarding dimensions, timber species, material swatches, and private home viewing.
              </p>

              {/* Product Preview Snippet */}
              <div className={styles.productSnippet}>
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className={styles.thumbImg}
                />
                <div className={styles.productMeta}>
                  <span className={styles.snippetTitle}>{selectedProduct.name}</span>
                  <span className={styles.snippetCategory}>{selectedProduct.category}</span>
                  <span className={styles.snippetPrice}>
                    {selectedProduct.isPriceOnRequest
                      ? 'Price on Request'
                      : formatINR(selectedProduct.price)}
                  </span>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Your Name <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Vikramaditya Singhania"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone Number <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+91 98765 43210"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. concierge@residence.com"
                    className={styles.input}
                  />
                </div>

                {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Preferred Finish / Material</label>
                    <select
                      value={finishPreference}
                      onChange={(e) => setFinishPreference(e.target.value)}
                      className={styles.input}
                    >
                      <option value="">Select standard finish or custom inquiry...</option>
                      {selectedProduct.colors.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="Custom Bespoke Specification">
                        Custom Bespoke Specification
                      </option>
                    </select>
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label className={styles.label}>Notes or Architectural Specifications</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Room dimensions, delivery location, or timeline preferences..."
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={15} />
                  <span>Submit Private Inquiry</span>
                </button>

                <p className={styles.demoDisclaimer}>
                  * Note: This is an interactive frontend demonstration. Inquiries are simulated locally and no payment, order booking, or backend storage occurs.
                </p>
              </form>
            </>
          ) : (
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>
                <CheckCircle size={32} />
              </div>
              <h3 className={styles.successTitle}>Inquiry Simulated Successfully</h3>
              <p className={styles.successMessage}>
                Thank you, <strong>{name}</strong>. Your expression of interest for <strong>{selectedProduct.name}</strong> has been registered in this frontend showcase.
              </p>
              <div className={styles.demoNote}>
                <strong>Frontend Demo Notice:</strong> As specified, no real email or CRM submission was triggered. Your simulated data was processed entirely in the browser.
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="btn btn-primary"
                style={{ marginTop: '0.8rem' }}
              >
                Close & Continue Browsing
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
