import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import '../styles/index.scss';

const Layout = ({children}) => (
  <>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
