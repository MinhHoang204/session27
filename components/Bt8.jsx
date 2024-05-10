import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import Main from './Main';
import Cart from './Cart';

function UserLayout() {
  return (
    <div>
      <Header />
      <Menu />
      <Navbar />
      <Main />
      <Cart />
    </div>
  );
}

export default UserLayout;