import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <h2>Categories</h2>
        <ul>
          <li><Link to="women">Women</Link></li>
<li><Link to="men">Men</Link></li>

        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
