import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Shop Categories</h1>
      <nav>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={`/${cat.id}`} data-testid={`link-${cat.id}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      {children}
    </div>
  );
};

export default Layout;
