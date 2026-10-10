import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, MessageSquare, ArrowLeft, Ruler, Check } from 'lucide-react';
import { products } from '../../data/products';
import { formatINR } from '../../utils/formatPrice';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { useInterestModal } from '../../context/InterestModalContext';
import { useChatbot } from '../../context/ChatbotContext';
import styles from './ProductDetails.module.css';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openInterestModal } = useInterestModal();
  const { openChat } = useChatbot();

  const product = products.find((p) => p.slug === slug);

  const [selectedColor, setSelectedColor] = useState(
    product && product.colors && product.colors.length > 0 ? product.colors[0] : null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className={styles.detailPage}>
        <div className="container" style={{ textAlign: 'center', padding: '8rem 2rem' }}>
          <h2 className="heading-editorial">Silhouette Not Found in Atelier</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            The requested furniture design may have been archived or belongs to an earlier private catalog edition.
          </p>
          <Link to="/collections" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            <ArrowLeft size={16} />
            <span>Return to Complete Archive</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related products
  const related = products
    .filter((p) => product.relatedProductIds.includes(p.id) || (p.category === product.category && p.id !== product.id))
    .slice(0, 3);

  return (
    <div className={styles.detailPage}>
      <div className="container-wide">
        <Breadcrumbs category={product.category} productName={product.name} />

        <div className={styles.productLayout}>
          {/* Gallery Column */}
          <div className={styles.galleryCol}>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Information Column */}
          <div className={styles.infoCol}>
            <div>
              <span className={styles.categoryTag}>{product.category}</span>
              <h1 className={styles.productName}>{product.name}</h1>
            </div>

            <div className={styles.priceBlock}>
              {product.isPriceOnRequest ? (
                <span className={styles.priceRequest}>Price on Request</span>
              ) : (
                <span className={styles.priceValue}>{formatINR(product.price)}</span>
              )}
              {product.leadTime && (
                <span className={styles.leadTimeBadge}>
                  Lead Time: {product.leadTime}
                </span>
              )}
            </div>

            <p className={styles.longDesc}>{product.longDescription}</p>

            {/* Color & Material Swatch Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className={styles.swatchBlock}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className={styles.swatchLabel}>
                    Available Finishes ({product.colors.length})
                  </label>
                  {selectedColor && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                      Selected: <strong>{selectedColor.name}</strong>
                    </span>
                  )}
                </div>

                <div className={styles.swatchesRow}>
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`${styles.swatchBtn} ${
                        selectedColor?.name === color.name ? styles.swatchBtnActive : ''
                      }`}
                    >
                      <span
                        className={styles.colorDot}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                      {selectedColor?.name === color.name && <Check size={12} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Core Dimensions Highlight */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glass)',
              padding: '1.2rem',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <Ruler size={20} color="var(--accent-gold)" />
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-gold)', display: 'block' }}>
                  Architectural Dimensions
                </span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  {product.dimensions}
                </strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionBtnsRow}>
              <button
                onClick={() => openInterestModal(product)}
                className={`btn btn-primary ${styles.primaryInquireBtn}`}
              >
                <Sparkles size={16} />
                <span>I'm Interested in This Product</span>
              </button>

              <button
                onClick={() => openChat(`Tell me more about ${product.name} and how it pairs with other furniture pieces.`)}
                className={styles.aiConsultBtn}
              >
                <MessageSquare size={16} />
                <span>Consult AI Stylist on This Piece</span>
              </button>
            </div>

            {/* Specifications Table */}
            <div className={styles.specsSection}>
              <div>
                <div className="eyebrow-tag">Structural Integrity</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>
                  Technical Specifications
                </h3>

                <table className={styles.specsTable}>
                  <tbody>
                    <tr>
                      <td className={styles.specKey}>Material</td>
                      <td className={styles.specVal}>{product.material}</td>
                    </tr>
                    <tr>
                      <td className={styles.specKey}>Dimensions</td>
                      <td className={styles.specVal}>{product.dimensions}</td>
                    </tr>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key}>
                        <td className={styles.specKey}>{key}</td>
                        <td className={styles.specVal}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginTop: '1rem' }}>
                  Care & Maintenance
                </h3>
                <ul className={styles.careList}>
                  {product.careInstructions.map((instruction, idx) => (
                    <li key={idx} className={styles.careItem}>
                      <span className={styles.careDot} />
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <div className="eyebrow-tag">Harmonious Pairings</div>
              <h2 className="heading-editorial">
                Complementary <em>Silhouettes</em>
              </h2>
            </div>
            <ProductGrid products={related} />
          </section>
        )}
      </div>
    </div>
  );
};
