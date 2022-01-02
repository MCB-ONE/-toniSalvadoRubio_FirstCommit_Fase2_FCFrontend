import React from 'react';

const CandidatoForm = () => {
  return (
    <div className="candidate-form">
      <div className="profile">
        <img src="./images/profile-img.jpeg" alt="imagen de perfil" />
        <div>
          <h1>Nombre Alumno</h1>
          <div className="profile-location">
            <i className="bi bi-geo-alt" />
            <h2>Valencia | España</h2>
          </div>
        </div>
      </div>
      <form className="row">
        <div>
          <label htmlFor="nombre" className="form-label">Nombre y Apellidos</label>
          <input type="text" className="form-control" id="nombre" placeholder="Nombre Alumno" name="nombre" />
        </div>
        <div className="col-6">
          <label htmlFor="telefono" className="form-label ">Nº Teléfono</label>
          <input type="tel" className="form-control num" id="telefono" placeholder="+34 654 85 52 48" name="telefono" />
        </div>
        <div className="col-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="hcliment@gmail.com" name="email" />
        </div>
        <div className="col-6">
          <label htmlFor="pais" className="form-label">País</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg pais" name="pais">
            <option selected>España</option>
            <option value="1">Argentina</option>
            <option value="2">Francia</option>
            <option value="3">Alemania</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="ciudad" className="form-label">Ciudad</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg ciudad" name="ciudad">
            <option selected>Barcelona</option>
            <option value="1">Madrid</option>
            <option value="2">Bilbao</option>
            <option value="3">Valencia</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="traslado" className="form-label">Traslado</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg traslado" name="traslado">
            <option selected value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="presencialidad" className="form-label">Presencialidad</label>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg presencialidad" name="presencialidad">
            <option selected value={0}>En remoto</option>
            <option value={1}>Presencial</option>
          </select>
        </div>
        <div className="col-12 mb-4">
          <label htmlFor="cv" className="form-label">Documento CV</label>
          <div>
            <input type="file" name="cv" id="cv" hidden />
            <button type="button" className="btn btn-secondary">
              <i className="bi bi-cloud-upload" />
              Subir de nuevo
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <i className="bi bi-trash" />
              Borrar
            </button>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="etiquetas" className="form-label">Etiquetas</label>
          <input type="text" className="tags form-control" placeholder="Escribe para buscar...." name="etiquetas" />
          <div className="tag-list">
            <span>
              HTML&CSS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>

            </span>
            <span>
              React
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>

            </span>
            <span>
              Angular
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidatoForm;
