import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { useChatbot } from '../../context/ChatbotContext';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openChat } = useChatbot();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`${styles.navHeader} ${isScrolled ? styles.navScrolled : ''}`}>
        <div className={`container-wide ${styles.navContainer}`}>
          {/* Brand Emblem */}
          <Link to="/" className={styles.brandLogo} aria-label="Commune Atelier Home">
            <span className={styles.brandTitle}>
              COMMUNE <span className={styles.brandAccent}>ATELIER</span>
            </span>
            <span className={styles.brandSubtitle}>Bespoke Living & Furniture</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.navLinks}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collections"
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customization"
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  Customization <span className={styles.studioBadge}>Studio</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className={styles.navActions}>
            <button
              onClick={() => openChat()}
              className={styles.aiTriggerBtn}
              title="Launch AI Furniture Stylist"
              aria-label="Open AI Assistant"
            >
              <Sparkles size={14} />
              <span>AI Stylist</span>
            </button>

            <Link
              to="/collections"
              className={`btn btn-primary ${styles.exploreCta}`}
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem' }}
            >
              Explore Collection
            </Link>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Refined Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mobileHeader}>
              <div className={styles.brandLogo}>
                <span className={styles.brandTitle}>
                  COMMUNE <span className={styles.brandAccent}>ATELIER</span>
                </span>
                <span className={styles.brandSubtitle}>Bespoke Living & Furniture</span>
              </div>
              <button
                className={styles.mobileMenuBtn}
                style={{ display: 'block' }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <ul className={styles.mobileLinks}>
              <li>
                <Link to="/" className={styles.mobileLinkItem}>
                  <span>Home</span>
                  <ArrowRight size={20} color="var(--accent-gold)" />
                </Link>
              </li>
              <li>
                <Link to="/collections" className={styles.mobileLinkItem}>
                  <span>Collections</span>
                  <ArrowRight size={20} color="var(--accent-gold)" />
                </Link>
              </li>
              <li>
                <Link to="/customization" className={styles.mobileLinkItem}>
                  <span>Customization Studio</span>
                  <span className={styles.studioBadge}>Preview</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.mobileLinkItem}>
                  <span>About Us</span>
                  <ArrowRight size={20} color="var(--accent-gold)" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.mobileLinkItem}>
                  <span>Showroom & Contact</span>
                  <ArrowRight size={20} color="var(--accent-gold)" />
                </Link>
              </li>
            </ul>

            <div className={styles.mobileFooter}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openChat();
                }}
                className={styles.aiTriggerBtn}
                style={{ justifyContent: 'center', padding: '0.85rem 1rem' }}
              >
                <Sparkles size={16} />
                <span>Launch AI Furniture Stylist</span>
              </button>

              <Link
                to="/collections"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Explore Full Catalog
              </Link>

              <p className={styles.mobileContactText}>
                Flagship Atelier: 18 Heritage Boulevard, Worli, Mumbai<br />
                Concierge: +91 (022) 8490-2100 | concierge@communeatelier.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
