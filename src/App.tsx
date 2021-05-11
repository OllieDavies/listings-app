import React, { useState } from 'react';
import { SortMethod, SortSelector, sortMethods } from './components/SortSelector';
import { HolidaysList } from "./components/HolidaysList";
import holidayData from "./data.json"

function App() {
  const [currentSort, setCurrentSort] = useState<SortMethod>(sortMethods[1]);

  const items = holidayData.sort(currentSort.compareFunction)

  return (
    <div className="app-container">
      <div className="sort-container">
        <SortSelector currentMethod={currentSort} onChange={(method) => setCurrentSort(method)} />
      </div>
      <div className="list-container">
        <HolidaysList items={items} />
      </div>
    </div>
  );
}

export default App;
