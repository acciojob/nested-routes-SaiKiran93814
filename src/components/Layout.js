import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { categories } from '../data/categories';

const Layout = () => {
  return (
    <div>
      {/* <h1>Shop Categories</h1> */}
      <nav>
        {categories.map((cat) => (
          <Link key={cat.id} to={`/${cat.id}`} style={{ marginRight: '10px' }}>
            {cat.name}
          </Link>
        ))}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
