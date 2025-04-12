import React from 'react';

const filterOptions = [
  {
    label: 'الفئة',
    options: ['كل الفئات', 'ملابس', 'إلكترونيات', 'المنزل', 'تجميل', 'ألعاب']
  },
  {
    label: 'السعر',
    type: 'range'
  },
  {
    label: 'التقييم',
    options: ['كل التقييمات', 'نجمة واحدة فأكثر', 'نجمتان فأكثر', 'ثلاث نجوم فأكثر', 'أربع نجوم فأكثر']
  },
  {
    label: 'العلامة التجارية',
    options: ['كل العلامات التجارية', 'العلامة التجارية أ', 'العلامة التجارية ب', 'العلامة التجارية ج']
  },
  {
    label: 'اللون',
    options: ['كل الألوان', 'أحمر', 'أزرق', 'أخضر']
  },
  {
    label: 'التوفر',
    options: ['الكل', 'متوفر', 'غير متوفر']
  },
  {
    label: 'خيارات الشحن',
    options: ['الكل', 'شحن مجاني', 'شحن سريع']
  }
];

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside 
      className={`w-64 bg-blue-700 text-white p-4 flex-shrink-0 h-full overflow-y-auto
        ${isOpen ? 'fixed inset-0 z-50 block lg:hidden' : 'hidden lg:block'}`}
      style={{ right: 0 }}
    >
      {isOpen && (
        <button 
          className="text-white text-xl absolute top-5 left-5 z-60 lg:hidden" 
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
      
      <div className="mb-3 mt-4 lg:mt-0">
        {filterOptions.map((filter, index) => (
          <div key={index} className="mb-4">
            <label className="block text-white mb-2">{filter.label}</label>
            {filter.type === 'range' ? (
              <input className="w-full accent-blue-400" type="range" />
            ) : (
              <select className="bg-blue-600 text-white p-2 rounded w-full border border-blue-500">
                {filter.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;