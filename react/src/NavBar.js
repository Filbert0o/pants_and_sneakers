import React from 'react';
import { Link } from 'react-router';
import BackButton from "./components/BackButton";
import SearchBar from './components/SearchBar';

const NavBar = props =>{
  return(
    <div>
      <Link to='/'>Venues</Link>&nbsp;
      <Link to='#'>Search</Link>&nbsp;
      <Link to='#'>Sign In</Link>&nbsp;
      <Link to='#'>Sign Up</Link>&nbsp;
      <br/>
      <SearchBar />
      <BackButton />
      {props.children}
    </div>
  )
}

export default NavBar;
