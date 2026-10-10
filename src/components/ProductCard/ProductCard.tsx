import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatINR } from '../../utils/formatPrice';
import { useInterestModal } from '../../context/InterestModalContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openInterestModal } = useInterestModal();
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80';

  return (
    <article className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        {product.featured && <span className={styles.tagBadge}>Curated Atelier</span>}
        <Link to={`/product/${product.slug}`} tabIndex={-1} aria-hidden="true">
          <img
            src={imageError ? fallbackImage : product.images[0]}
            alt={product.name}
            className={styles.productImg}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        </Link>
      </div>

      <div className={styles.contentContainer}>
        <span className={styles.categoryLabel}>{product.category}</span>
        
        <Link to={`/product/${product.slug}`}>
          <h3 className={styles.productTitle}>{product.name}</h3>
        </Link>

        <p className={styles.productDesc}>{product.shortDescription}</p>

        <div className={styles.metaRow}>
          <div>
            {product.isPriceOnRequest ? (
              <span className={styles.priceOnRequest}>Price on Request</span>
            ) : (
              <span className={styles.priceLabel}>{formatINR(product.price)}</span>
            )}
          </div>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className={styles.colorSwatches} title={`Available in ${product.colors.length} bespoke finishes`}>
              {product.colors.slice(0, 3).map((col, idx) => (
                <span
                  key={idx}
                  className={styles.colorDot}
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        <div className={styles.actionsRow}>
          <Link to={`/product/${product.slug}`} className={styles.viewBtn}>
            View Details
          </Link>
          <button
            onClick={() => openInterestModal(product)}
            className={styles.interestBtn}
            title="Express interest for private preview and styling"
          >
            <Sparkles size={13} />
            <span>I'm Interested</span>
          </button>
        </div>
      </div>
    </article>
  );
};
