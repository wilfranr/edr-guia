import React from 'react';
import { classes } from '../../data';

const characterStats = classes.find(c => c.name === 'Vagabond').stats;

const StatsChart = () => {
  return (
    <div className="bg-glass border border-glass rounded-3xl p-6 text-white shadow-lg backdrop-filter backdrop-blur-lg mt-6">
      <h2 className="text-xl font-bold text-white mb-4">Atributos</h2>
      <ul className="space-y-2">
        {Object.entries(characterStats).map(([stat, value]) => (
          <li key={stat} className="flex justify-between items-center">
            <span className="text-gray-300 capitalize">{stat}</span>
            <span className="font-bold text-elden-gold">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsChart;
