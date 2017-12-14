import React from 'react';
import { Link } from 'react-router';
import BackButton from "./components/BackButton";
import SearchBar from './components/SearchBar';

const NavBar = props =>{
  return(
    <div>
      <div id='header'>
        <div id='billboard'>
          <h2><Link to={`/venues`} style={{ textDecoration: 'none', color: '#fff' }}>Venue Menu</Link></h2>
        </div>
        <div id='nav-bar'>
          <div id='search-bar' className="twelve columns">
            <SearchBar />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar;
