import React from 'react';
import LanguageSelector from './LanguageSelector';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-blue-600 text-white pt-3 px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4 space-x-reverse">
          <button 
            className="text-white text-xl m-2 lg:hidden" 
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <i className="fas fa-bars"></i>
          </button>
          <LanguageSelector />
        </div>
        
        <div className="flex-1 mx-2 items-center">
          <input 
            className="bg-blue-500 text-white p-2 rounded w-full sm:ml-[130px] md:w-[80%] lg:ml-[80px] placeholder-blue-200" 
            placeholder="بحث" 
            type="search"
            aria-label="Search"
          />
        </div>
        
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <i className="fas fa-bell text-white text-xl"></i>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">5</span>
          </div>
          <div className="flex items-center">
            <img 
              alt="صورة الملف الشخصي" 
              className="rounded-full w-10 h-10" 
              src="https://storage.googleapis.com/a1aa/image/YlahwsuCvGdq_-eWAncHQLJJrejVhssVQ5qCkqJs2Uo.jpg" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;