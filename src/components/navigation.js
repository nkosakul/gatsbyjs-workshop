import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <header className="navigation">
    <div className="navigation__inner">
      <Link to="/" className="logo">LOGO</Link>

      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="is-active">Home</Link>
          </li>
          <li>
            <Link to="/about/" activeClassName="is-active">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;
