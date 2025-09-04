import { classes } from '../../data';

const character = {
  ...classes.find(c => c.name === 'Vagabond'),
  level: 150,
  runes: 24580,
};

const CharacterSummaryCard = () => {
  return (
    <div className="bg-glass border border-glass rounded-3xl p-6 text-white shadow-lg backdrop-filter backdrop-blur-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-lg">Nivel</p>
          <p className="text-4xl font-bold">{character.level}</p>
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-elden-gold">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-lg">Runas</p>
        <p className="text-2xl font-semibold text-elden-gold">
          {character.runes.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CharacterSummaryCard;
