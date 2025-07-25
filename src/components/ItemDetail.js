import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ItemDetail = () => {
  const { itemId } = useParams();
  const { category } = useOutletContext();
  const item = category.items.find((i) => i.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
