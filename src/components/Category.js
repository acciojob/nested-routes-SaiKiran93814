import { Link, Outlet, useParams } from 'react-router-dom';
import { data } from "../data.js";

export default function Category() {
  const { categoryId } = useParams();


  if (!categoryId || !data[categoryId]) {
    return <p>Category not found</p>;
  }

  const items = data[categoryId];

  return (
    <div>
      <h3>{categoryId.toUpperCase()} Items</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
