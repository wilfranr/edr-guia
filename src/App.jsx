import CharacterSummaryCard from './components/CharacterSummaryCard';
import InventoryList from './components/InventoryList';
import FilterTabs from './components/FilterTabs';
import StatsChart from './components/StatsChart';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <main className="container mx-auto p-4">
        {/* Screen 1: Character Summary */}
        <div className="mb-8">
          <CharacterSummaryCard />
          <StatsChart />
        </div>

        {/* Screen 2: Inventory */}
        <div>
          <FilterTabs />
          <InventoryList />
        </div>
      </main>
    </div>
  );
}

export default App;
