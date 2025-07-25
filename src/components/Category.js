import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Category = () => {
  const { categoryId, itemId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category || !category.items) {
    return <h2>Category not found or no items</h2>;
  }

  const selectedItem = category.items.find((item) => item.id === itemId);

  return (
    <div>
      <h2>{category.name} Items</h2>
      <ul>
        {category.items.map((item) => (
          <li key={item.id}>
            <Link to={`/${category.id}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div>
          <h3>{selectedItem.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Category;
