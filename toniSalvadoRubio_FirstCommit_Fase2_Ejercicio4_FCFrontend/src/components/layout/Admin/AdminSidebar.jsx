import React from 'react';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="filters">
        <div className="row justify-content-between">
          <h5 className="col-auto section-title">Filtros de búsqueda</h5>
          <i className="bi bi-trash" />
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="etiquetas" className="form-label">Etiquetas</label>
            <input type="text" className="form-control" placeholder="Escribe para buscar...." />
            <div className="tag-list">
              <span>
                HTML&CSS
                <i className="bi bi-x" />

              </span>
              <span>
                React
                <i className="bi bi-x" />
              </span>
              <span>
                Angular
                <i className="bi bi-x" />
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pais" className="form-label">País</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg pais">
              <option defaultValue>España</option>
              <option value="1">Argentina</option>
              <option value="2">Francia</option>
              <option value="3">Alemania</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="ciudad" className="form-label">Ciudad</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg ciudad">
              <option defaultValue>Barcelona</option>
              <option value="1">Madrid</option>
              <option value="2">Bilbao</option>
              <option value="3">Valencia</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="presencialidad">Presencial/ a distancia</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="false" name="presencialidad" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Presencial
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="true" name="presencialidad" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                En remoto
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="traslado">Posibilidad traslado</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="true" name="traslado" />
              <label className="form-check-label " htmlFor="traslado">
                Si
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="false" name="traslado" />
              <label className="form-check-label" htmlFor="traslado">
                No
              </label>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AdminSidebar;
