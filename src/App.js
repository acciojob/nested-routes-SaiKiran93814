import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h2>Index</h2>} />
        <Route path=":categoryId" element={<Category />}>
          <Route path=":itemId" element={<ItemDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
