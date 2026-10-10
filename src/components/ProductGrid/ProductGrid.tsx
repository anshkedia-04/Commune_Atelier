import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onResetFilters }) => {
  if (products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Sparkles size={36} color="var(--accent-gold)" />
        <h3 className={styles.emptyTitle}>No Silhouettes Match Your Criteria</h3>
        <p className={styles.emptyDesc}>
          Try broadening your category filter, adjusting your price brackets, or resetting your search keywords to view our complete bespoke archive.
        </p>
        {onResetFilters && (
          <button onClick={onResetFilters} className="btn btn-gold-outline" style={{ marginTop: '1rem' }}>
            <RotateCcw size={15} />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.gridWrapper}>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4) }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};
