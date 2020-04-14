import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <header className="navigation">
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
  </header>
);

export default Navigation;
