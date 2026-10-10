import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sliders, Bell, X, CheckCircle, Eye, ShieldCheck } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import styles from './CustomizationPreview.module.css';

interface PieceConfig {
  id: string;
  name: string;
  category: string;
  baseImage: string;
  defaultWidth: number;
  minWidth: number;
  maxWidth: number;
}

const CONFIGURABLE_PIECES: PieceConfig[] = [
  {
    id: 'vesper',
    name: 'The Vesper Modular Sectional',
    category: 'Sofas & Lounge',
    baseImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
    defaultWidth: 280,
    minWidth: 220,
    maxWidth: 360,
  },
  {
    id: 'kanso',
    name: 'Kanso Sculptural Armchair',
    category: 'Sofas & Lounge',
    baseImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85',
    defaultWidth: 84,
    minWidth: 78,
    maxWidth: 96,
  },
  {
    id: 'valentin',
    name: 'Valentin Fluted Credenza',
    category: 'Storage & Cabinets',
    baseImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
    defaultWidth: 200,
    minWidth: 160,
    maxWidth: 240,
  },
];

const FABRICS = [
  { name: 'Oatmeal Bouclé', hex: '#EBE6DC' },
  { name: 'Charcoal Weave', hex: '#2B2927' },
  { name: 'Saddle Tan Leather', hex: '#8B5A2B' },
  { name: 'Forest Velvet', hex: '#2C3A2F' },
];

const WOOD_FINISHES = [
  { name: 'Smoked American Walnut', hex: '#4A3525' },
  { name: 'Bleached Scandinavian Ash', hex: '#D2C3B0' },
  { name: 'Heritage Ebonized Oak', hex: '#1C1B1A' },
];

const ACCENT_METALS = [
  { name: 'Brushed Champagne Brass', hex: '#C9A86A' },
  { name: 'Matte Gunmetal', hex: '#3B3B3B' },
  { name: 'Antique Bronze', hex: '#634A35' },
];

export const CustomizationPreview: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage: _isStandalonePage = false }) => {
  const { showToast } = useToast();

  const [selectedPiece, setSelectedPiece] = useState<PieceConfig>(CONFIGURABLE_PIECES[0]);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedWood, setSelectedWood] = useState(WOOD_FINISHES[0]);
  const [selectedMetal, setSelectedMetal] = useState(ACCENT_METALS[0]);
  const [currentWidth, setCurrentWidth] = useState(selectedPiece.defaultWidth);

  // Early access modal
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [notifyName, setNotifyName] = useState('');
  const [notifyContact, setNotifyContact] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifyError, setNotifyError] = useState('');

  const handlePieceSelect = (piece: PieceConfig) => {
    setSelectedPiece(piece);
    setCurrentWidth(piece.defaultWidth);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyContact.trim()) {
      setNotifyError('Please provide your phone or email for notification.');
      return;
    }
    setNotifyError('');
    setNotifySubmitted(true);
    showToast(
      'Studio Waitlist Confirmed (Demo)',
      `Thank you! You will receive VIP early access notification when the Customization Studio launches.`,
      'success'
    );
  };

  const resetNotifyModal = () => {
    setIsNotifyModalOpen(false);
    setNotifyName('');
    setNotifyContact('');
    setNotifySubmitted(false);
    setNotifyError('');
  };

  return (
    <section className={styles.previewSection} id="customization-studio">
      <div className={styles.ambientBackdrop} />

      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.previewBadge}>
            <Sparkles size={14} />
            <span>Customization Studio — Coming Soon</span>
          </div>
          <h2 className="heading-display">
            Your Vision. <em>Your Furniture.</em>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
            Soon, you'll be able to personalize your favourite furniture pieces by exploring colours, fabrics, finishes, sizes, and more — and bring your ideas to life.
          </p>
        </div>

        {/* Studio Layout */}
        <div className={styles.studioLayout}>
          {/* Interactive Visualizer Stage */}
          <div className={styles.visualizerStage}>
            <div className={styles.stageHeader}>
              <h3 className={styles.stagePieceTitle}>{selectedPiece.name}</h3>
              <span className={styles.watermarkNotice}>Interactive Preview Mode</span>
            </div>

            <div className={styles.imageFrame}>
              <img
                src={selectedPiece.baseImage}
                alt={selectedPiece.name}
                className={styles.visualizerImg}
              />
              <div className={styles.blueprintOverlay}>
                <span>
                  <strong>Configured Span:</strong> {currentWidth} cm
                </span>
                <span>
                  <strong>Finish:</strong> {selectedWood.name}
                </span>
                <span>
                  <strong>Textile:</strong> {selectedFabric.name}
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.2rem',
              fontSize: '0.74rem',
              color: 'var(--text-muted)'
            }}>
              <ShieldCheck size={14} color="var(--accent-gold)" />
              <span>
                Demonstration visualizer. Precision CNC manufacturing and tactile material swatch sample boxes will be available upon public release.
              </span>
            </div>
          </div>

          {/* Interactive Controls Panel */}
          <div className={styles.controlsPanel}>
            {/* 1. Piece Selector */}
            <div className={styles.controlBlock}>
              <label className={styles.blockTitle}>
                <Eye size={13} /> 1. Select Furniture Silhouette
              </label>
              <div className={styles.pieceSelectorTabs}>
                {CONFIGURABLE_PIECES.map((piece) => (
                  <button
                    key={piece.id}
                    type="button"
                    onClick={() => handlePieceSelect(piece)}
                    className={`${styles.pieceTab} ${
                      selectedPiece.id === piece.id ? styles.pieceTabActive : ''
                    }`}
                  >
                    {piece.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fabric / Upholstery */}
            <div className={styles.controlBlock}>
              <label className={styles.blockTitle}>2. Upholstery & Leather Palette</label>
              <div className={styles.swatchGroup}>
                {FABRICS.map((fabric) => (
                  <button
                    key={fabric.name}
                    type="button"
                    onClick={() => setSelectedFabric(fabric)}
                    className={`${styles.swatchBtn} ${
                      selectedFabric.name === fabric.name ? styles.swatchBtnActive : ''
                    }`}
                  >
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: fabric.hex }}
                    />
                    <span>{fabric.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Wood Species */}
            <div className={styles.controlBlock}>
              <label className={styles.blockTitle}>3. Solid Hardwood Finish</label>
              <div className={styles.swatchGroup}>
                {WOOD_FINISHES.map((wood) => (
                  <button
                    key={wood.name}
                    type="button"
                    onClick={() => setSelectedWood(wood)}
                    className={`${styles.swatchBtn} ${
                      selectedWood.name === wood.name ? styles.swatchBtnActive : ''
                    }`}
                  >
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: wood.hex }}
                    />
                    <span>{wood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Metal Accents */}
            <div className={styles.controlBlock}>
              <label className={styles.blockTitle}>4. Metal Hardware & Inset</label>
              <div className={styles.swatchGroup}>
                {ACCENT_METALS.map((metal) => (
                  <button
                    key={metal.name}
                    type="button"
                    onClick={() => setSelectedMetal(metal)}
                    className={`${styles.swatchBtn} ${
                      selectedMetal.name === metal.name ? styles.swatchBtnActive : ''
                    }`}
                  >
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: metal.hex }}
                    />
                    <span>{metal.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Custom Dimensions Slider */}
            <div className={styles.controlBlock}>
              <div className={styles.dimensionSliderWrapper}>
                <div className={styles.sliderRow}>
                  <label className={styles.blockTitle}>
                    <Sliders size={13} /> 5. Adjust Dimension (Width)
                  </label>
                  <strong>{currentWidth} cm</strong>
                </div>
                <input
                  type="range"
                  min={selectedPiece.minWidth}
                  max={selectedPiece.maxWidth}
                  step={5}
                  value={currentWidth}
                  onChange={(e) => setCurrentWidth(Number(e.target.value))}
                  className={styles.sliderInput}
                  aria-label="Adjust width dimension"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  <span>Min: {selectedPiece.minWidth} cm</span>
                  <span>Max: {selectedPiece.maxWidth} cm</span>
                </div>
              </div>
            </div>

            {/* Real-time Summary Box */}
            <div className={styles.summaryBox}>
              <span className={styles.summaryTitle}>Live Blueprint Summary</span>
              <p style={{ margin: 0 }}>
                {selectedPiece.name} tailored in <strong>{selectedFabric.name}</strong>, anchored by{' '}
                <strong>{selectedWood.name}</strong> frame with <strong>{selectedMetal.name}</strong> details at{' '}
                <strong>{currentWidth} cm</strong> span.
              </p>
            </div>

            {/* Early Access CTA */}
            <button
              onClick={() => setIsNotifyModalOpen(true)}
              className={`btn btn-primary ${styles.earlyAccessBtn}`}
            >
              <Bell size={16} />
              <span>Notify Me When It Launches</span>
            </button>
          </div>
        </div>
      </div>

      {/* Early Access Notification Modal */}
      <AnimatePresence>
        {isNotifyModalOpen && (
          <div className={styles.notifyModalBackdrop} onClick={resetNotifyModal}>
            <motion.div
              className={styles.notifyModalCard}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
            >
              <button
                onClick={resetNotifyModal}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                }}
                aria-label="Close early access modal"
              >
                <X size={20} />
              </button>

              {!notifySubmitted ? (
                <>
                  <div className="eyebrow-tag">VIP Atelier Access</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                    Customization Studio <em>Waitlist</em>
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Be the first to experience 1-on-1 virtual bespoke consultations and receive our complimentary linen and timber sample box upon launch.
                  </p>

                  <form onSubmit={handleNotifySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={notifyName}
                        onChange={(e) => setNotifyName(e.target.value)}
                        placeholder="e.g. Radhika Kapoor"
                        style={{
                          width: '100%',
                          marginTop: '0.3rem',
                          padding: '0.85rem 1rem',
                          background: '#131210',
                          border: '1px solid var(--border-glass)',
                          color: '#fff',
                          borderRadius: '4px',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
                        Email or Phone Number *
                      </label>
                      <input
                        type="text"
                        value={notifyContact}
                        onChange={(e) => setNotifyContact(e.target.value)}
                        placeholder="radhika@atelier.com or +91 98765 43210"
                        style={{
                          width: '100%',
                          marginTop: '0.3rem',
                          padding: '0.85rem 1rem',
                          background: '#131210',
                          border: notifyError ? '1px solid #d9534f' : '1px solid var(--border-glass)',
                          color: '#fff',
                          borderRadius: '4px',
                        }}
                      />
                      {notifyError && (
                        <span style={{ fontSize: '0.72rem', color: '#ff6b6b', marginTop: '3px', display: 'block' }}>
                          {notifyError}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginTop: '0.5rem', width: '100%' }}
                    >
                      <span>Join Early Access Invitation</span>
                    </button>

                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.3rem' }}>
                      * Frontend Demo: No automated emails or spam will be sent.
                    </p>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(201, 168, 106, 0.15)',
                    border: '1px solid var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#fff' }}>
                    Invitation Priority Reserved
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '380px' }}>
                    Thank you, {notifyName || 'valued guest'}. Your notification preference has been saved in this frontend demonstration.
                  </p>
                  <button
                    onClick={resetNotifyModal}
                    className="btn btn-primary"
                    style={{ marginTop: '0.5rem' }}
                  >
                    Return to Showcase
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
