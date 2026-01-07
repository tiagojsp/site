import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm"
            aria-label="Toggle Language"
        >
            <Globe size={18} />
            <span>{i18n.language === 'en' ? 'EN' : 'PT'}</span>
        </button>
    );
};

export default LanguageSelector;
