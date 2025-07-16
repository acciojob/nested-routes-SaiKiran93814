import { useParams } from 'react-router-dom';
import { data } from '../data';

export default function ItemDetail() {
  const { categoryId, itemId } = useParams();
  const item = data[categoryId]?.find(i => i.id === itemId);

  if (!item) return <p>Item not found.</p>;

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
    </div>
  );
}
