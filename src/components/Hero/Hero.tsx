import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image Stage */}
      <div className={styles.heroBackdrop}>
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=90"
          alt="Commune Atelier luxury living room showcase"
          className={styles.heroImage}
        />
        <div className={styles.heroGradientOverlay} />
        <div className={styles.heroVignette} />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroBadge}
        >
          <Sparkles size={14} />
          <span>Atelier Showcase • Autumn Edition</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroHeadline}
        >
          Furniture That <em>Defines</em> Your Space.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroSubtitle}
        >
          Thoughtfully designed pieces for the way you live. Sculptural forms, hand-honed European stones, and Italian bouclés crafted for timeless living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroCtas}
        >
          <Link to="/collections" className="btn btn-primary">
            <span>Explore Collection</span>
            <ArrowRight size={15} />
          </Link>
          <Link to="/about" className="btn btn-outline">
            <span>Discover Our Story</span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Subtle Exhibition Pill */}
      <div className={styles.floatingCuratorTag}>
        <span className={styles.floatingTagLabel}>Featured Centerpiece</span>
        <span className={styles.floatingTagName}>The Vesper Modular Sectional</span>
      </div>
    </section>
  );
};
