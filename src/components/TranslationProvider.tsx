'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * A client component that provides language context to its children
 * Use this to wrap server components that need to be translated
 */
const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  // Use language context to trigger re-renders when language changes
  useLanguage();
  
  return <>{children}</>;
};

export default TranslationProvider;
