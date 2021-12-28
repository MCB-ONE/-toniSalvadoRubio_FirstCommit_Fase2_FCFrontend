import React from 'react';
import PropTypes from 'prop-types';

const AdminNavbar = ({ title }) => {
  return (
    <div className="admin-navbar">
      <h2 className="section-title">{title}</h2>
      <form className="form-inline search">
        <i className="bi bi-search" />
        <input
          className="form-control"
          type="search"
          placeholder="Buscar por Nombre, Email o Palabra clave..."
          aria-label="Search"
        />
      </form>
      <button type="button" className="btn btn-outline-secondary">
        <i className="bi bi-plus" />
        Añadir
        alumnos
      </button>
    </div>
  );
};

AdminNavbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AdminNavbar;
