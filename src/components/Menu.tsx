import React, { useState } from 'react';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);

  const activeCategory = MENU_DATA.find(cat => cat.id === activeTab);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-haus-black mb-4">Our Menu</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our carefully curated selection of breakfast classics, creative benedicts, and specialty drinks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-haus-gold text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {activeCategory?.items.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              {item.image ? (
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="hidden sm:block flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gray-100"></div>
              )}
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-haus-black group-hover:text-haus-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-bold text-haus-gold ml-4">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">{item.description}</p>
                )}
                {item.popular && (
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-red-500 text-xs font-bold uppercase tracking-wider rounded-sm">
                    Popular
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;