import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductFilters, type SortOption } from '../../components/ProductFilters/ProductFilters';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { products } from '../../data/products';
import type { Category } from '../../types/product';
import styles from './Collections.module.css';

const CATEGORIES: Category[] = [
  'Living Room',
  'Sofas & Lounge',
  'Dining',
  'Bedroom',
  'Office Furniture',
  'Storage & Cabinets',
  'Decor & Accessories',
];

export const Collections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = (searchParams.get('category') as Category) || 'All';
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(
    CATEGORIES.includes(initialCategory as Category) ? initialCategory : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState<SortOption>('featured');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');

  // Update state when URL search param changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat as Category)) {
      setSelectedCategory(cat as Category);
    }
  }, [searchParams]);

  const handleSelectCategory = (cat: Category | 'All') => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedSort('featured');
    setSelectedStyle('All Styles');
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Style Filter
    if (selectedStyle !== 'All Styles') {
      result = result.filter((p) => p.styleTags && p.styleTags.includes(selectedStyle));
    }

    // 3. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.styleTags && p.styleTags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }

    // 4. Sorting
    result.sort((a, b) => {
      if (selectedSort === 'price-asc') {
        return a.price - b.price;
      }
      if (selectedSort === 'price-desc') {
        return b.price - a.price;
      }
      if (selectedSort === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (selectedSort === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      // 'featured'
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    return result;
  }, [selectedCategory, selectedStyle, searchQuery, selectedSort]);

  return (
    <div className={styles.collectionsPage}>
      <div className="container-wide">
        {/* Page Hero Header */}
        <div className={styles.pageHero}>
          <div className={styles.heroContent}>
            <div className="eyebrow-tag">Atelier Catalog</div>
            <h1 className={styles.pageTitle}>
              The Permanent <em>Collection</em>
            </h1>
            <p className={styles.pageDesc}>
              A comprehensive showcase of 24 architectural furniture silhouettes. Filter by living environment, aesthetic movement, or timber species to discover your room’s anchor piece.
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <ProductFilters
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          selectedStyle={selectedStyle}
          onSelectStyle={setSelectedStyle}
          totalProductsCount={products.length}
          filteredCount={filteredProducts.length}
          onClearFilters={handleClearFilters}
        />

        {/* Responsive Grid */}
        <div className={styles.catalogMain}>
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleClearFilters}
          />
        </div>
      </div>
    </div>
  );
};
