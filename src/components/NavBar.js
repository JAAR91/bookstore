import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="panel-bg">
      <div className="nav-inner-panel d-flex flex-row justify-content-between">
        <ul className="d-flex flex-row align-items-center m-0 list-style-none p-0">
          <li className="mx-2">
            <p className="Bookstore-CMS">
              Bookstore CMS
            </p>
          </li>
          {links.map((link) => (
            <li key={link.id} className="mx-2">
              <NavLink
                className="BOOKS text-decoration-none text-muted"
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-0">
          <button type="button" className="Oval">
            <FaUser className="m-0" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
