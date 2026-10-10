import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  category: string;
  productName: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, productName }) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbsNav}>
      <Link to="/" className={styles.crumbLink}>
        Home
      </Link>
      <ChevronRight size={12} className={styles.separator} />
      <Link to="/collections" className={styles.crumbLink}>
        Collections
      </Link>
      <ChevronRight size={12} className={styles.separator} />
      <span className={styles.crumbLink}>{category}</span>
      <ChevronRight size={12} className={styles.separator} />
      <span className={styles.currentCrumb}>{productName}</span>
    </nav>
  );
};
