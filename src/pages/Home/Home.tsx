import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Trees, Gem, Quote } from 'lucide-react';
import { Hero } from '../../components/Hero/Hero';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { RoomStylingAssistant } from '../../components/RoomStylingAssistant/RoomStylingAssistant';
import { CustomizationPreview } from '../../components/CustomizationPreview/CustomizationPreview';
import { collectionsData } from '../../data/collections';
import { products } from '../../data/products';
import { testimonialsData } from '../../data/testimonials';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className={styles.homeMain}>
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Editorial Ticker Marquee */}
      <div className="editorial-marquee" aria-hidden="true">
        <div className="editorial-marquee-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Bespoke Living
              </span>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Monolithic Travertine
              </span>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Kiln-Dried European Beech
              </span>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Italian Woven Bouclé
              </span>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Architectural Purity
              </span>
              <span className="editorial-marquee-item">
                <span className="editorial-marquee-dot" /> Private Showrooms
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Featured Collections */}
      <section className={styles.collectionsSection}>
        <div className="container-wide">
          <div className={styles.sectionHeaderCenter}>
            <div className="eyebrow-tag">Spatial Architecture</div>
            <h2 className="heading-editorial">
              Curated <em>Collections</em>
            </h2>
            <p style={{ marginTop: '0.8rem' }}>
              Explore our seven deliberate living environments, unified by honesty of material and monumental form.
            </p>
          </div>

          <div className={styles.collectionsGrid}>
            {collectionsData.map((col, index) => {
              // Asymmetrical magazine-style grid
              const isLarge = index === 0 || index === 1;
              return (
                <div
                  key={col.id}
                  className={isLarge ? styles.collectionTileLarge : styles.collectionTileSmall}
                >
                  <Link
                    to={`/collections?category=${encodeURIComponent(col.name)}`}
                    className={styles.collectionCard}
                  >
                    <img
                      src={col.image}
                      alt={col.name}
                      className={styles.collectionBgImg}
                      loading="lazy"
                    />
                    <div className={styles.collectionOverlay} />
                    <div className={styles.collectionContent}>
                      <span className={styles.collectionCount}>
                        {col.itemCount} Master Silhouettes
                      </span>
                      <h3 className={styles.collectionTitle}>{col.name}</h3>
                      <p className={styles.collectionDesc}>{col.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className={styles.featuredProductsSection}>
        <div className="container-wide">
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className="eyebrow-tag">Handcrafted Silhouettes</div>
              <h2 className="heading-editorial">
                Featured <em>Atelier Works</em>
              </h2>
            </div>
            <Link to="/collections" className="btn btn-gold-outline">
              <span>View All 24 Designs</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* 5. Editorial Brand Story (Split Alabaster Ivory Section) */}
      <section className={`${styles.brandStorySection} section-light`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImageCol}>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Commune Atelier woodcraft craftsmanship"
                className={styles.storyImageMain}
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=85"
                alt="Artisan hand planing timber"
                className={styles.storyImageInset}
                loading="lazy"
              />
            </div>

            <div className={styles.storyContentCol}>
              <div className="eyebrow-tag">Atelier Philosophy</div>
              <h2 className={styles.storyTitle}>
                Where Architecture Meets <em>Domestic Solitude</em>.
              </h2>
              <p className={styles.storyParagraph}>
                Founded on the belief that furniture is not merely decorative filler, but the spatial skeleton of human dwelling, Commune Atelier crafts heirloom silhouettes that honor raw materiality.
              </p>
              <p className={styles.storyParagraph}>
                We eschew ephemeral trends in favor of monumental proportions, blind mortise-and-tenon joinery, and natural vegetable-tanned leathers that deepen in character over generations.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/about" className="btn btn-outline">
                  <span>Explore Our Heritage & Process</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Craftsmanship & Materials */}
      <section className={styles.craftsmanshipSection}>
        <div className="container">
          <div className={styles.craftLayout}>
            <div>
              <div className="eyebrow-tag">Master Joinery</div>
              <h2 className="heading-editorial">
                The Sacred Language of <em>Raw Matter</em>.
              </h2>
              <p style={{ marginTop: '1.2rem', color: 'var(--text-secondary)' }}>
                Every curve, mitre, and chamfer is shaped by generational artisans who understand timber grain tension, stone porosity, and the breath of natural flax.
              </p>
            </div>

            <div className={styles.craftCardsGrid}>
              <div className={styles.craftCard}>
                <Trees size={24} className={styles.craftCardIcon} />
                <h4 className={styles.craftCardTitle}>FSC® Certified Timber</h4>
                <p className={styles.craftCardDesc}>
                  Harvested from managed American and European woodlands, air-dried for 18 months and finished with botanical oils.
                </p>
              </div>

              <div className={styles.craftCard}>
                <Gem size={24} className={styles.craftCardIcon} />
                <h4 className={styles.craftCardTitle}>Tivoli & Carrara Stones</h4>
                <p className={styles.craftCardDesc}>
                  Continuous bullnose slabs of Navona travertine and Calacatta Viola, honed to satin perfection with oleophobic seals.
                </p>
              </div>

              <div className={styles.craftCard}>
                <Shield size={24} className={styles.craftCardIcon} />
                <h4 className={styles.craftCardTitle}>Hypoallergenic Comfort</h4>
                <p className={styles.craftCardDesc}>
                  Multi-density memory foam core wrapped in sterilized down feather blends for sink-in relaxation that holds its form.
                </p>
              </div>

              <div className={styles.craftCard}>
                <Compass size={24} className={styles.craftCardIcon} />
                <h4 className={styles.craftCardTitle}>Architectural Ergonomics</h4>
                <p className={styles.craftCardDesc}>
                  Proportions calibrated for genuine conversational comfort, posture alignment, and tranquil negative space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customization Studio — Coming Soon Interactive Teaser */}
      <CustomizationPreview />

      {/* 8. AI Room Styling Discovery Demo */}
      <RoomStylingAssistant />

      {/* 9. Sample Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <div className="eyebrow-tag">Collector Sentiments</div>
            <h2 className="heading-editorial">
              Voices of the <em>Patrons</em>
            </h2>
            <p style={{ marginTop: '0.8rem' }}>
              Reflections from architects, interior stylists, and private collectors.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonialsData.map((test) => (
              <div key={test.id} className={styles.testimonialCard}>
                <Quote size={28} color="var(--accent-gold)" opacity={0.6} />
                <p className={styles.testimonialQuote}>"{test.quote}"</p>
                <div>
                  <h4 className={styles.testimonialAuthor}>{test.author}</h4>
                  <p className={styles.testimonialRole}>
                    {test.role} • {test.location}
                  </p>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                    Acquired: {test.collection}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.testimonialNotice}>
            * Disclaimer: Testimonials are realistic sample content curated for demonstration purposes.
          </p>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className={styles.finalCtaSection}>
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85"
          alt="Commune Atelier Sanctuary"
          className={styles.finalCtaImg}
        />
        <div className="container">
          <div className={styles.finalCtaContent}>
            <div className="eyebrow-tag">Reserve Your Atmosphere</div>
            <h2 className="heading-display">
              Ready to Shape Your <em>Living Space</em>?
            </h2>
            <p style={{ color: '#d8d4c9', fontSize: '1.1rem', maxWidth: '600px' }}>
              Explore our complete catalogue of 24 architectural silhouettes or consult with our private concierge for bespoke residence curation.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/collections" className="btn btn-primary">
                <span>Explore Full Collection</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Inquire With Concierge</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
