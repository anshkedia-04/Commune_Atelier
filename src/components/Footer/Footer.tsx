import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Newsletter } from '../Newsletter/Newsletter';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container-wide">
        {/* Newsletter Section */}
        <div className={styles.newsletterWrapper}>
          <Newsletter />
        </div>

        {/* Main Footer Links Columns */}
        <div className={styles.footerGrid}>
          {/* Brand Manifesto */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitle}>
              COMMUNE <em>ATELIER</em>
            </div>
            <p className={styles.brandDesc}>
              A bespoke architectural furniture house inspired by brutalist geometry, pure organic materials, and European heritage woodcraft. Digital showroom showcase.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://one8commune.co.in"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                title="Design Inspiration Reference"
                aria-label="Inspiration Reference"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className={styles.footerColTitle}>Digital Showroom</h4>
            <ul className={styles.footerLinksList}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  Home Exhibition
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Complete Collection
                </Link>
              </li>
              <li>
                <Link to="/customization" className={styles.footerLink}>
                  Customization Studio <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem' }}>[PREVIEW]</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  About the Atelier
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Flagship Galleries
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className={styles.footerColTitle}>Silhouettes</h4>
            <ul className={styles.footerLinksList}>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Sofas & Lounge
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Monolithic Dining
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Bedroom Sanctuaries
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Executive Office
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Storage & Credenzas
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.footerLink}>
                  Lighting & Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Concierge Placeholders */}
          <div>
            <h4 className={styles.footerColTitle}>Concierge & Atelier</h4>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactLabel}>Flagship Showroom</span>
              <span style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={14} color="var(--accent-gold)" />
                18 Heritage Boulevard, Worli, Mumbai
              </span>
            </div>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactLabel}>Private Inquiries</span>
              <span style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} color="var(--accent-gold)" />
                +91 (022) 8490-2100 / 2101
              </span>
            </div>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactLabel}>Curator Email</span>
              <span style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={14} color="var(--accent-gold)" />
                concierge@communeatelier.com
              </span>
            </div>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactLabel}>Atelier Hours</span>
              <span>Mon – Sat: 10:30 AM – 7:30 PM (By Private Appointment)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} COMMUNE ATELIER. All rights reserved. Design inspired by One8 Commune UI/UX.
          </div>
          <div>
            Frontend-only demonstration showcase. No commercial payment gateways or live bookings enabled.
          </div>
        </div>
      </div>
    </footer>
  );
};
