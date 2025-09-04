import React from 'react';

const InventoryItem = ({ item }) => {
  // Helper to format attribute requirements
  const formatAttributes = (attributes) => {
    return attributes.map(attr => `${attr.name.substring(0, 3).toUpperCase()} ${attr.amount}`).join(', ');
  };

  // Helper to display scaling
  const formatScaling = (scaling) => {
    return scaling.map(scale => `${scale.name.substring(0, 3).toUpperCase()} ${scale.scaling}`).join(' / ');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-glass border-b border-glass text-white">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="font-bold text-lg">{item.name}</p>
          <p className="text-sm text-gray-400">{formatAttributes(item.requiredAttributes)}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-elden-gold text-lg">+10</p> {/* Hardcoded for now */}
        <p className="text-sm text-gray-400">{formatScaling(item.scalesWith)}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
