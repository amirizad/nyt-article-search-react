import React from 'react';
import Tab from './Tab';


const NavTab = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <Tab to="/query" onlyActiveOnIndex >Search</Tab>
        <Tab to="/results" >Results</Tab>
        <Tab to="/saved" >Saved Articles</Tab>
      </ul>
    </nav>
  );
};

export default NavTab;