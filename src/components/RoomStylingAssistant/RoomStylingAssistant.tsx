import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Palette, Layers, Compass } from 'lucide-react';
import { products } from '../../data/products';
import type { Product } from '../../types/product';
import { formatINR } from '../../utils/formatPrice';
import { useInterestModal } from '../../context/InterestModalContext';
import styles from './RoomStylingAssistant.module.css';

interface StyleConcept {
  title: string;
  subtitle: string;
  description: string;
  paletteColors: string[];
  matchedProducts: Product[];
}

export const RoomStylingAssistant: React.FC = () => {
  const { openInterestModal } = useInterestModal();

  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [selectedStyle, setSelectedStyle] = useState('Modern Luxury');
  const [selectedPalette, setSelectedPalette] = useState('Warm Earth & Walnut');
  const [selectedBudget, setSelectedBudget] = useState('₹1,00,000 – ₹2,50,000');
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate initial curation
  const getConceptData = (
    room: string,
    style: string,
    palette: string,
    budget: string
  ): StyleConcept => {
    // Filter products matching room category
    let matched = products.filter((p) => {
      if (room === 'Living Room') return p.category === 'Living Room' || p.category === 'Sofas & Lounge';
      if (room === 'Dining') return p.category === 'Dining';
      if (room === 'Bedroom') return p.category === 'Bedroom';
      if (room === 'Office') return p.category === 'Office Furniture';
      return true;
    });

    if (matched.length < 3) {
      matched = products.slice(0, 3);
    }

    const swatchesMap: Record<string, string[]> = {
      'Warm Earth & Walnut': ['#3c2c22', '#825938', '#dfc79b', '#f5f2eb'],
      'Alabaster & Brass': ['#f8f6f0', '#c9a86a', '#d4cec4', '#2a2826'],
      'Obsidian & Charcoal': ['#181715', '#2c2a27', '#635f56', '#c9a86a'],
      'Sage & Limestone': ['#7e8576', '#e5d8c3', '#4a3b2c', '#f6f3ec'],
    };

    return {
      title: `${style} ${room} Concept`,
      subtitle: `${palette} • ${budget}`,
      description: `Calibrated for understated luxury, this curation combines architectural negative space with rich natural finishes. By harmonizing tactile upholstery with structural timber and stone, the room fosters deep sensory composure and effortless entertaining.`,
      paletteColors: swatchesMap[palette] || ['#3c2c22', '#c9a86a', '#f5f2eb'],
      matchedProducts: matched.slice(0, 3),
    };
  };

  const [currentConcept, setCurrentConcept] = useState<StyleConcept>(() =>
    getConceptData('Living Room', 'Modern Luxury', 'Warm Earth & Walnut', '₹1,00,000 – ₹2,50,000')
  );

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentConcept(getConceptData(selectedRoom, selectedStyle, selectedPalette, selectedBudget));
      setIsGenerating(false);
    }, 450);
  };

  return (
    <section className={styles.stylistSection}>
      <div className={styles.ambientGlow} />

      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="eyebrow-tag">AI Interior Curation</div>
          <h2 className="heading-editorial">
            Room Styling & Architectural <em>Harmony</em>
          </h2>
          <p style={{ marginTop: '0.8rem' }}>
            Allow our deterministic styling engine to orchestrate your floor plan. Select your space, aesthetic movement, and palette for an instant curated suite.
          </p>
        </div>

        <div className={styles.stylistLayout}>
          {/* Controls Selection */}
          <div className={styles.controlsCard}>
            {/* 1. Room Type */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                <Layers size={14} /> 1. Select Room Type
              </label>
              <div className={styles.optionsGrid}>
                {['Living Room', 'Dining', 'Bedroom', 'Office'].map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className={`${styles.optionButton} ${
                      selectedRoom === room ? styles.optionButtonActive : ''
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Interior Style */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                <Compass size={14} /> 2. Aesthetic Movement
              </label>
              <div className={styles.optionsGrid}>
                {[
                  'Modern Luxury',
                  'Minimalist',
                  'Scandinavian',
                  'Industrial Chic',
                  'Classic Contemporary',
                ].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`${styles.optionButton} ${
                      selectedStyle === style ? styles.optionButtonActive : ''
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Color Palette */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>
                <Palette size={14} /> 3. Material & Color Palette
              </label>
              <div className={styles.optionsGrid}>
                {[
                  'Warm Earth & Walnut',
                  'Alabaster & Brass',
                  'Obsidian & Charcoal',
                  'Sage & Limestone',
                ].map((palette) => (
                  <button
                    key={palette}
                    type="button"
                    onClick={() => setSelectedPalette(palette)}
                    className={`${styles.optionButton} ${
                      selectedPalette === palette ? styles.optionButtonActive : ''
                    }`}
                  >
                    {palette}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Budget Range */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>4. Investment Scope</label>
              <div className={styles.optionsGrid}>
                {[
                  'Under ₹1,00,000',
                  '₹1,00,000 – ₹2,50,000',
                  '₹2,50,000 – ₹5,00,000',
                  'Luxury Open / Bespoke',
                ].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`${styles.optionButton} ${
                      selectedBudget === budget ? styles.optionButtonActive : ''
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`btn btn-primary ${styles.submitBtn}`}
            >
              <Sparkles size={16} />
              <span>{isGenerating ? 'Curating Atmosphere...' : 'Find My Style'}</span>
            </button>
          </div>

          {/* Results Output */}
          <div className={styles.resultsContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentConcept.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}
              >
                <div>
                  <span className={styles.conceptBadge}>
                    <Sparkles size={13} />
                    {currentConcept.subtitle}
                  </span>
                  <h3 className={styles.conceptTitle}>{currentConcept.title}</h3>
                  <p className={styles.conceptDescription}>{currentConcept.description}</p>
                </div>

                {/* Swatches bar */}
                <div className={styles.palettePreview}>
                  <span className={styles.paletteTitle}>Harmonic Tonal Swatches:</span>
                  <div className={styles.paletteSwatches}>
                    {currentConcept.paletteColors.map((hex, idx) => (
                      <span
                        key={idx}
                        className={styles.swatch}
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>

                {/* Curated Products Cards */}
                <div>
                  <h4 style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--accent-gold)',
                    marginBottom: '0.8rem'
                  }}>
                    Recommended Atelier Silhouettes ({currentConcept.matchedProducts.length})
                  </h4>

                  <div className={styles.curatedGrid}>
                    {currentConcept.matchedProducts.map((prod) => (
                      <div key={prod.id} className={styles.curatedCard}>
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          className={styles.curatedImg}
                          loading="lazy"
                        />
                        <div className={styles.curatedBody}>
                          <h5 className={styles.curatedName}>{prod.name}</h5>
                          <span className={styles.curatedPrice}>
                            {prod.isPriceOnRequest ? 'Price on Request' : formatINR(prod.price)}
                          </span>

                          <div className={styles.curatedActions}>
                            <Link to={`/product/${prod.slug}`} className={styles.linkDetail}>
                              Details
                            </Link>
                            <button
                              onClick={() => openInterestModal(prod)}
                              className={styles.quickInterestBtn}
                              title="Express Interest in this recommendation"
                            >
                              Inquire
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
