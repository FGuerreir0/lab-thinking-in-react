import React from 'react';
import './App.css';
import data from './data.json';

import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';

const products = data.data;

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
