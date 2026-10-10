import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import styles from './Newsletter.module.css';

export const Newsletter: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
    showToast(
      'Newsletter Subscription Confirmed (Demo)',
      `Thank you! You are now subscribed to Atelier Dispatch.`,
      'success'
    );
  };

  return (
    <div className={styles.newsletterCard}>
      <div className="eyebrow-tag">Atelier Gazette</div>
      <h3 className={styles.title}>
        Curations & Private <em>Releases</em>
      </h3>
      <p className={styles.desc}>
        Receive our seasonal journal of architectural essays, private collector viewings, and previews of limited release furniture casks.
      </p>

      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your private email address..."
            className={styles.emailInput}
            aria-label="Email address for newsletter"
          />
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            <span>Subscribe</span>
            <Send size={14} />
          </button>
        </form>
      ) : (
        <div className={styles.successBox}>
          <CheckCircle size={32} className={styles.successIcon} />
          <p className={styles.successMsg}>Welcome to Commune Atelier's Circle.</p>
          <span className={styles.demoNote}>
            Frontend demonstration confirmed. No unsolicited promotional emails are dispatched.
          </span>
        </div>
      )}
      {error && <span style={{ color: '#ff6b6b', fontSize: '0.74rem', marginTop: '0.4rem', display: 'block' }}>{error}</span>}
    </div>
  );
};
