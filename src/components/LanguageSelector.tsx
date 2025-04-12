'use client';

import React from 'react';
import { useLanguage, t } from '@/contexts/LanguageContext';
import { MdLanguage } from 'react-icons/md';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-100 hover:bg-yellow-200 cursor-pointer border border-yellow-300">
        <MdLanguage size={20} className="text-yellow-800" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'ta')}
          className="bg-transparent border-none outline-none text-yellow-800 cursor-pointer font-medium"
          title="Select Language / மொழியைத் தேர்ந்தெடுக்கவும்"
        >
          <option value="en">{t('language.english')}</option>
          <option value="ta">{t('language.tamil')}</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
