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
    <nav className="bg-white d-flex flex-row justify-content-around">
      <ul className="d-flex flex-row align-items-center m-0 list-style-none">
        <li className="mx-2">
          <p className="fs-2 text-blue">
            Bookstore CMS
          </p>
        </li>
        {links.map((link) => (
          <li key={link.id} className="mx-2">
            <NavLink
              className="link-dark text-decoration-none text-muted"
              to={link.path}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="p-3">
        <button type="button" className="user-button">
          <FaUser className="m-0" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
