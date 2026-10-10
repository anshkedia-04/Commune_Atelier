import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Compass } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Private Appointment');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number.';
    if (!email || !email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!message.trim()) errs.message = 'Please provide your enquiry details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    showToast(
      'Message Received (Demo Mode)',
      `Thank you, ${name}. Your concierge message has been logged for this frontend demo.`,
      'success'
    );
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        {/* Header */}
        <div className={styles.pageHero}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            Private Concierge & Showrooms
          </div>
          <h1 className="heading-display">
            Initiate a <em>Conversation</em>.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
            Whether commissioning a full residence curation, arranging private evening showroom viewings, or requesting material swatch boxes, our atelier directors are at your service.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* Showroom Information Column */}
          <div className={styles.infoColumn}>
            {/* Flagship Showrooms */}
            <div className={styles.showroomCard}>
              <h3 className={styles.showroomTitle}>
                <Compass size={20} color="var(--accent-gold)" />
                Flagship Showroom — Mumbai
              </h3>

              <div className={styles.infoRow}>
                <MapPin size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>18 Heritage Boulevard</strong>
                  <p style={{ margin: 0 }}>Worli Sea Face, Mumbai 400018, Maharashtra</p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <Phone size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>+91 (022) 8490-2100 / 2101</strong>
                  <p style={{ margin: 0 }}>Direct Concierge Desk</p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <Mail size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>concierge@communeatelier.com</strong>
                  <p style={{ margin: 0 }}>General Curatorial Enquiries</p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <Clock size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Visiting Hours</strong>
                  <p style={{ margin: 0 }}>Tuesday – Sunday: 10:30 AM – 7:30 PM (Private appointments encouraged)</p>
                </div>
              </div>
            </div>

            {/* Satellite Galleries */}
            <div className={styles.showroomCard}>
              <h3 className={styles.showroomTitle}>
                <Navigation size={18} color="var(--accent-gold)" />
                Satellite Exhibition Galleries
              </h3>

              <div className={styles.infoRow}>
                <MapPin size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>New Delhi Atelier</strong>
                  <p style={{ margin: 0 }}>42 Mehrauli Heritage Arcade, Qutab Complex, New Delhi 110030</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>+91 (011) 4890-1120</span>
                </div>
              </div>

              <div className={styles.infoRow} style={{ marginTop: '0.5rem' }}>
                <MapPin size={18} className={styles.infoIcon} />
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Bangalore Design Salon</strong>
                  <p style={{ margin: 0 }}>84 Lavelle Road, Shanthala Nagar, Bangalore 560001</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>+91 (080) 6790-4400</span>
                </div>
              </div>
            </div>

            {/* Stylized Architectural Map Placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapBgOverlay} />
              <MapPin size={36} color="var(--accent-gold)" style={{ zIndex: 2 }} />
              <div style={{ zIndex: 2 }}>
                <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>
                  18°59'48.2"N 72°49'02.1"E
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Interactive Google Maps Integration Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Consultation Form */}
          <div className={styles.formCard}>
            {!isSubmitted ? (
              <>
                <div className="eyebrow-tag">Consultation Request</div>
                <h2 className={styles.formTitle}>
                  Dispatch a <em>Private Message</em>
                </h2>
                <p className={styles.formSubtitle}>
                  Please specify your residence scope, preferred showroom, or product inquiry below.
                </p>

                <form onSubmit={handleSubmit} className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Your Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Vikramaditya Birla"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Contact Phone Number *</label>
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
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="vikram@residence.com"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Nature of Inquiry</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={styles.input}
                    >
                      <option value="Private Showroom Appointment">Private Showroom Appointment</option>
                      <option value="Full Residence Curation Consultation">Full Residence Curation Consultation</option>
                      <option value="Bespoke Material & Timber Swatches">Bespoke Material & Timber Swatches</option>
                      <option value="Architect & Interior Designer Trade Program">Architect Trade Program</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Your Message or Project Details *</label>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us about your space, dimensions, or specific pieces of interest..."
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={15} />
                    <span>Send Inquiry to Concierge</span>
                  </button>

                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.4rem' }}>
                    * Frontend demonstration. Form submission is verified and handled locally in your browser.
                  </p>
                </form>
              </>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>
                  Inquiry Registered
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '440px' }}>
                  Thank you, <strong>{name}</strong>. Your message regarding <em>{subject}</em> has been processed in this frontend showcase.
                </p>
                <div style={{
                  background: 'rgba(201, 168, 106, 0.08)',
                  border: '1px dashed var(--accent-gold)',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '4px',
                  fontSize: '0.76rem',
                  color: 'var(--accent-gold-light)',
                  lineHeight: 1.4
                }}>
                  <strong>Demo Mode Note:</strong> Contact details are placeholders and simulated locally. No real customer contact is triggered.
                </div>
                <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '0.8rem' }}>
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
