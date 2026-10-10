import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { CustomizationPreview } from '../../components/CustomizationPreview/CustomizationPreview';

export const Customization: React.FC = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Editorial Studio Intro */}
      <div className="container" style={{ textAlign: 'center', maxWidth: '860px', paddingBottom: '3rem' }}>
        <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
          Future Vision • Customization Studio
        </div>
        <h1 className="heading-display" style={{ marginBottom: '1.2rem' }}>
          The Private <em>Customization Studio</em>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Soon, you will have direct digital access to our master workshop. Handpick timber species, specify centimetre-accurate dimensions, and select from over 40 archival Italian bouclés and aniline leathers.
        </p>

        <div style={{
          marginTop: '2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(201, 168, 106, 0.08)',
          border: '1px dashed var(--accent-gold)',
          padding: '0.6rem 1.4rem',
          borderRadius: '4px',
          fontSize: '0.82rem',
          color: 'var(--accent-gold)'
        }}>
          <ShieldAlert size={16} />
          <span>Notice: This interactive studio is a live demonstration preview. Orders & custom manufacturing are not yet active.</span>
        </div>
      </div>

      {/* Embedded Full Interactive Visualizer */}
      <CustomizationPreview isStandalonePage={true} />

      {/* How It Will Work (4 Steps) */}
      <div className="container" style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>How The Studio Will Function</div>
          <h2 className="heading-editorial">The Bespoke <em>Commission Process</em></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            padding: '2rem',
            borderRadius: '4px'
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--accent-gold)' }}>01</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: '0.6rem 0' }}>Select Base Silhouette</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Choose from our signature sofas, credenzas, beds, and tables as your structural baseline.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            padding: '2rem',
            borderRadius: '4px'
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--accent-gold)' }}>02</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: '0.6rem 0' }}>Tune Proportions</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Calibrate exact length, width, and seat depth to harmonize with your home’s architectural floor plan.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            padding: '2rem',
            borderRadius: '4px'
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--accent-gold)' }}>03</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: '0.6rem 0' }}>Curate Matter & Textures</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Select Italian textured bouclés, vegetable-tanned leathers, smoked walnut, or brushed brass insets.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            padding: '2rem',
            borderRadius: '4px'
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--accent-gold)' }}>04</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: '0.6rem 0' }}>Artisanal Handcrafting</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Master artisans in our Worli workshops hand-shape and assemble your commissioned piece with white-glove installation.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <Link to="/collections" className="btn btn-outline">
            <span>Browse Ready-to-Deliver Catalog</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
