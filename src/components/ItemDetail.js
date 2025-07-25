import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const item = category?.items.find((i) => i.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
