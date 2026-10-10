import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fallbackErrors, setFallbackErrors] = useState<Record<number, boolean>>({});

  const fallbackImage = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85';

  const handleImageError = (index: number) => {
    setFallbackErrors((prev) => ({ ...prev, [index]: true }));
  };

  const currentImage = fallbackErrors[selectedIndex] ? fallbackImage : (images[selectedIndex] || fallbackImage);

  return (
    <div className={styles.galleryContainer}>
      {/* Main Image Stage */}
      <div className={styles.mainImageWrapper}>
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={currentImage}
            alt={`${productName} view ${selectedIndex + 1}`}
            className={styles.mainImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onError={() => handleImageError(selectedIndex)}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className={styles.thumbnailsRow} role="tablist" aria-label="Product image gallery thumbnails">
          {images.map((imgUrl, idx) => {
            const displayUrl = fallbackErrors[idx] ? fallbackImage : imgUrl;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={selectedIndex === idx}
                aria-label={`View image ${idx + 1}`}
                onClick={() => setSelectedIndex(idx)}
                className={`${styles.thumbBtn} ${selectedIndex === idx ? styles.thumbActive : ''}`}
              >
                <img
                  src={displayUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className={styles.thumbImg}
                  onError={() => handleImageError(idx)}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
