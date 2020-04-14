import React from 'react';
import Navigation from './navigation';
import Footer from './footer';

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
