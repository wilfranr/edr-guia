import React from 'react';
import InventoryItem from './InventoryItem';
import { weapons } from '../../data';

// Get a few weapons for display
const sampleWeapons = weapons.filter(w => ['Moonveil', 'Rivers of Blood', 'Dark Moon Greatsword'].includes(w.name));

const InventoryList = () => {
  return (
    <div className="bg-glass border border-glass rounded-3xl shadow-lg backdrop-filter backdrop-blur-lg mt-6">
      <div className="p-4 border-b border-glass">
        <h2 className="text-xl font-bold text-white">Inventario</h2>
      </div>
      <div>
        {sampleWeapons.map(item => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
