import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'امريكا', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  { code: 'ar', name: 'السعودية', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg' },
  { code: 'it', name: 'إيطاليا', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' },
  { code: 'pk', name: 'باكستان', flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg' },
  { code: 'fr', name: 'فرنسا', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' }
];

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="h-[29px] w-[60px] text-white flex justify-center items-center">
        <img 
          src={selectedLanguage.flag} 
          className="w-[70%] h-[80%] mr-5" 
          alt={`علم ${selectedLanguage.name}`} 
        />
      </div>
      <div className="relative inline-block text-left">
        <button 
          type="button" 
          className="inline-flex justify-center w-full px-2 py-1 text-sm font-medium text-white" 
          onClick={() => setShowDropdown(!showDropdown)}
          aria-expanded={showDropdown}
          aria-haspopup="true"
        >
          <i className="fas fa-caret-down text-[15px] w-[60px] h-[20px] flex justify-center items-center">        
            <span className="px-2 font-medium">{selectedLanguage.name}</span>
          </i>
        </button>
        {showDropdown && (
          <div 
            className="left-1 absolute mt-2 w-[120px] rounded-md shadow-lg bg-white ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
          >
            <div className="py-1" role="none">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className="text-gray-700 block px-4 py-2 text-sm flex items-center hover:bg-blue-50 w-full text-right"
                  onClick={() => handleLanguageSelect(language)}
                  role="menuitem"
                >
                  <img src={language.flag} className="w-5 h-4 ml-2" alt={`علم ${language.name}`} />
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LanguageSelector;