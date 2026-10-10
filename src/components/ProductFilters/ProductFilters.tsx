import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import type { Category } from '../../types/product';
import styles from './ProductFilters.module.css';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
  totalProductsCount: number;
  filteredCount: number;
  onClearFilters: () => void;
}

const STYLES = ['All Styles', 'Modern Luxury', 'Minimalist', 'Scandinavian', 'Industrial Chic', 'Classic Contemporary'];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedSort,
  onSortChange,
  selectedStyle,
  onSelectStyle,
  totalProductsCount,
  filteredCount,
  onClearFilters,
}) => {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery.trim().length > 0 ||
    selectedStyle !== 'All Styles' ||
    selectedSort !== 'featured';

  return (
    <div className={styles.filtersContainer}>
      {/* Search and Sort row */}
      <div className={styles.searchAndSortBar}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by silhouette, material, or collection..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
            aria-label="Search furniture products"
          />
        </div>

        <div className={styles.sortBox}>
          <span className={styles.sortLabel}>
            <SlidersHorizontal size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Sort By:
          </span>
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className={styles.sortSelect}
            aria-label="Sort products"
          >
            <option value="featured">Curated & Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Category Pills horizontal scroll */}
      <div className={styles.categoryPills}>
        <button
          onClick={() => onSelectCategory('All')}
          className={`${styles.categoryPill} ${selectedCategory === 'All' ? styles.categoryPillActive : ''}`}
        >
          All Silhouettes ({totalProductsCount})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`${styles.categoryPill} ${selectedCategory === cat ? styles.categoryPillActive : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Style Chips */}
      <div className={styles.stylesFilterRow}>
        <span className={styles.styleLabel}>Aesthetic Direction:</span>
        {STYLES.map((style) => (
          <button
            key={style}
            onClick={() => onSelectStyle(style)}
            className={`${styles.styleChip} ${selectedStyle === style ? styles.styleChipActive : ''}`}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Results and Active Filter Chips */}
      <div className={styles.chipsBar}>
        <span className={styles.countLabel}>
          Showing <strong>{filteredCount}</strong> of {totalProductsCount} designs
        </span>

        {hasActiveFilters && (
          <div className={styles.activeChipsList}>
            {selectedCategory !== 'All' && (
              <span className={styles.chipItem}>
                Category: {selectedCategory}
                <button
                  onClick={() => onSelectCategory('All')}
                  className={styles.chipCloseBtn}
                  aria-label="Remove category filter"
                >
                  <X size={13} />
                </button>
              </span>
            )}
            {selectedStyle !== 'All Styles' && (
              <span className={styles.chipItem}>
                Style: {selectedStyle}
                <button
                  onClick={() => onSelectStyle('All Styles')}
                  className={styles.chipCloseBtn}
                  aria-label="Remove style filter"
                >
                  <X size={13} />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className={styles.chipItem}>
                Keyword: "{searchQuery}"
                <button
                  onClick={() => onSearchChange('')}
                  className={styles.chipCloseBtn}
                  aria-label="Clear search keyword"
                >
                  <X size={13} />
                </button>
              </span>
            )}
            <button onClick={onClearFilters} className={styles.clearAllBtn}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
