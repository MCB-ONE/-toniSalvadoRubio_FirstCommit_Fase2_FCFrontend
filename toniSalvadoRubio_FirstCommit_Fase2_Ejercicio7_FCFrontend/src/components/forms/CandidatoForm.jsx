import React, { useState } from 'react';
import Select from 'react-select';
import { CgClose } from 'react-icons/cg';
/* Tag options */
const tags = [
  { value: 'react', label: 'React' },
  { value: 'html&css', label: 'Htmal&Css' },
  { value: 'angular', label: 'Angular' },
  { value: 'java', label: 'Java' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'Php' },
  { value: 'flutter', label: 'Flutter' },
];

const CandidatoForm = () => {
  const [selectedTags, setSelectedTags] = useState(null);

  const handleTagsChange = (e) => {
    // eslint-disable-next-line no-console
    console.log(e.value);
    setSelectedTags(e);
  };

  /* const deleteTags = (value) => {

} */
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
        <div className="col-12 mb-3 tag-selector">
          <label htmlFor="etiquetas" className="form-label">Etiquetas</label>
          <Select className="form-control" placeholder="Escribe para buscar...." name="etiquetas" isMulti options={tags} value={selectedTags} onChange={handleTagsChange} classNamePrefix="tag-select" />
          {
            selectedTags === null ? ''
              : (
                <div id="tag-list" className="tag-list">
                  {selectedTags.map((t) => (
                    <span>
                      {t.label}
                      <CgClose />
                    </span>
                  ))}
                </div>
              )

          }
        </div>
      </form>
    </div>
  );
};

export default CandidatoForm;
