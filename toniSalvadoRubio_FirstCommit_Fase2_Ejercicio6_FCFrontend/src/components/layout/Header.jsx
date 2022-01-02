import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="return">
        <p>
          <i className="bi bi-arrow-left" />
          Volver
        </p>
      </div>
      <div className="profile">
        <div className="profile-img">
          <h4>NA</h4>
        </div>
        <span className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="home"
            role="button"
            aria-expanded="false"
          >
            UserName
            <i className="bi bi-chevron-down" />

          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="home">Perfil</a></li>
          </ul>
        </span>
      </div>
    </header>
  );
};

export default Header;
