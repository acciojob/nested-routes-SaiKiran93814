import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Select a category from the menu.</p>} />
          <Route path=":categoryId" element={<Category />}>
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
