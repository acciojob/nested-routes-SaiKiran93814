import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { categories } from '../data/categories';

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) return <h2>Category not found</h2>;

  return (
    <div>
      <h2>{category.name} Items</h2>
      <ul>
        {category.items.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ category }} />
    </div>
  );
};

export default Category;
