import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.aboutHero}>
          <div className="eyebrow-tag">Our Heritage & Origins</div>
          <h1 className={styles.heroHeadline}>
            The Architecture of <em>Living Well</em>.
          </h1>
          <p className={styles.heroSubtitle}>
            Commune Atelier was founded on a singular conviction: that modern interiors suffer from disposable noise. We craft furniture with architectural stillness, designed to outlive the buildings that house them.
          </p>
        </div>
      </div>

      {/* Full Bleed Cinematic Spread */}
      <div className={styles.fullBleedSpread}>
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
          alt="Atelier workshop and raw timber logs"
          className={styles.spreadImg}
        />
        <div className={styles.spreadCaption}>
          <h3 className={styles.spreadTitle}>Worli Studio & Master Bench</h3>
          <p className={styles.spreadText}>
            Where 100-year reclaimed timbers and Roman travertine blocks meet digital 5-axis precision joinery.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Section 1: Philosophy & Approach */}
        <section className={styles.manifestoSection}>
          <div className={styles.manifestoGrid}>
            <div className={styles.manifestoTextCol}>
              <div className="eyebrow-tag">01 / Design Approach</div>
              <h2 className={styles.manifestoTitle}>
                Sculptural Form Born From <em>Restraint</em>.
              </h2>
              <p className={styles.manifestoParagraph}>
                Our creative directors approach furniture not as isolated objects, but as spatial interventions. Every line is tested for negative space: how light travels around a curved armrest, how acoustic bouclé softens room echo, and how solid walnut plinths anchor high-ceiling salons.
              </p>
              <p className={styles.manifestoParagraph}>
                Inspired by the monumental boldness of modern European pavilions and Japanese joinery treatises, each silhouette strips away unnecessary embellishment to let raw matter speak.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
                alt="Woodworking joinery"
                className={styles.manifestoImg}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Materials & Durability */}
        <section className={styles.manifestoSection}>
          <div className={styles.manifestoGrid}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
                alt="Natural travertine marble tabletop"
                className={styles.manifestoImg}
                loading="lazy"
              />
            </div>

            <div className={styles.manifestoTextCol}>
              <div className="eyebrow-tag">02 / Noble Materials</div>
              <h2 className={styles.manifestoTitle}>
                Materials That Welcome the <em>Touch of Time</em>.
              </h2>
              <p className={styles.manifestoParagraph}>
                We do not use synthetic laminates, printed veneers, or hollow particle boards. Our timber is FSC® kiln-dried American Black Walnut and European Beech, allowed to breathe under organic botanical hardwax oils.
              </p>
              <p className={styles.manifestoParagraph}>
                Our stone is quarried from historic Italian deposits in Tivoli and Carrara, sealed against domestic life while celebrating geological vein fissures that took millions of years to form.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars Stats */}
        <div className={styles.pillarsRow}>
          <div className={styles.pillarCard}>
            <span className={styles.pillarNum}>100%</span>
            <h4 className={styles.pillarTitle}>Solid Hardwood Core</h4>
            <p className={styles.pillarDesc}>
              No hollow cores or chemical boards. Built with mortise & tenon joinery.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarNum}>25 Yr</span>
            <h4 className={styles.pillarTitle}>Structural Integrity</h4>
            <p className={styles.pillarDesc}>
              Internal frames guaranteed for a quarter-century of rigorous domestic life.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarNum}>Zero</span>
            <h4 className={styles.pillarTitle}>VOC Finishes</h4>
            <p className={styles.pillarDesc}>
              Natural beeswaxes and plant-based hardwax oils safe for families and air purity.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarNum}>3 Casks</span>
            <h4 className={styles.pillarTitle}>Annual Limited Ed.</h4>
            <p className={styles.pillarDesc}>
              Strict production limits per silhouette to maintain master artisanal attention.
            </p>
          </div>
        </div>

        {/* Brand Mission Statement */}
        <div className={styles.missionBox}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            Brand Mission
          </div>
          <blockquote className={styles.missionQuote}>
            "To build furniture with such uncompromising dignity that future generations will refuse to part with it."
          </blockquote>
          <span className={styles.missionAuthor}>
            — Commune Atelier Design Manifesto, Worli Studio
          </span>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/collections" className="btn btn-primary">
              <span>Explore The Permanent Collection</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
