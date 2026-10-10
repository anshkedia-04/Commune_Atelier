import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../types/product';

interface InterestModalContextType {
  isOpen: boolean;
  selectedProduct: Product | null;
  openInterestModal: (product: Product) => void;
  closeInterestModal: () => void;
}

const InterestModalContext = createContext<InterestModalContextType | undefined>(undefined);

export const InterestModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openInterestModal = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeInterestModal = () => {
    setIsOpen(false);
  };

  return (
    <InterestModalContext.Provider
      value={{
        isOpen,
        selectedProduct,
        openInterestModal,
        closeInterestModal,
      }}
    >
      {children}
    </InterestModalContext.Provider>
  );
};

export const useInterestModal = (): InterestModalContextType => {
  const context = useContext(InterestModalContext);
  if (!context) {
    throw new Error('useInterestModal must be used within an InterestModalProvider');
  }
  return context;
};
