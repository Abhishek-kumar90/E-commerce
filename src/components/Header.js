import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-logo">Spotify 2.0</Link>
      <div className="header-nav">
        <Link to="/search">Search</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/genres">Genres</Link>
      </div>
    </div>
  );
}

export default Header;
