import React, { Component } from 'react';
import logo from '../assets/logo.png';
import routes from '../constants/routes';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo"
          style={{
            background: `url(${logo}) no-repeat center center`,
            backgroundSize: 'contain'
          }}
        >
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
        <ul className="nav-list">
          { routes.map(route => (
            <li key={route.label}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          )) }
        </ul>
      </nav>
    )
  }
}
