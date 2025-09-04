import React, { useState } from 'react';

const filters = ['Armas', 'Armaduras', 'Talismanes', 'Hechizos', 'Consumibles'];

const FilterTabs = () => {
  const [activeFilter, setActiveFilter] = useState('Armas');

  return (
    <div className="flex items-center justify-center my-6">
      <div className="bg-glass border border-glass rounded-full p-1 flex space-x-1">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300
              ${activeFilter === filter ? 'bg-elden-gold text-black' : 'text-white hover:bg-white/10'}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
