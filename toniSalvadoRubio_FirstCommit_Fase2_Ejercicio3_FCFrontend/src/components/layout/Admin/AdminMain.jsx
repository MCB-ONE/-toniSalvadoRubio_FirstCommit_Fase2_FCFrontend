/* eslint-disable jsx-a11y/scope */
import React from 'react';
import Table from '../../pure/Table';
import AdminNavbar from './AdminNavbar';

// eslint-disable-next-line no-unused-vars
const listAlumnos = [
  {
    nombre: 'Álvaro Sánchez Monteagudo', ciudad: 'Valencia', pais: 'España', teléfono: '+34 657 85 25 46', email: 'smonteagudo@gmail.com', etiquetas: ['HTML&CSS', 'ANGULAR', 'JAVA', 'PHP'],
  },
  {
    nombre: 'Amparo Herrera Climent', ciudad: 'Sevilla', pais: 'España', teléfono: '+34 654 55 98 56', email: 'aherreracliment@gmail.com', etiquetas: ['HTML&CSS', 'REACT', 'JAVA', 'PHP'],
  },
  {
    nombre: 'Manuel Jimenéz Santos', ciudad: 'Berlín', pais: 'Alemania', teléfono: '+34 634 45 22 56', email: 'manujimenez@gmail.com', etiquetas: ['JAVA', 'PHP'],
  },
  {
    nombre: 'Cristina Bea Martos', ciudad: 'Barcelona', pais: 'España', teléfono: '+34 684 99 56 70', email: 'cristibea_martos@gmail.com', etiquetas: ['REACT', 'HTML&CSS'],
  },
  {
    nombre: 'Jordi Rubio Roses', ciudad: 'Barcelona', pais: 'España', teléfono: '+34 600 57 32 11', email: 'rosesrubio@gmail.com', etiquetas: ['C#', 'JAVA'],
  },
  {
    nombre: 'Markus Estein Vomel', ciudad: 'Berlín', pais: 'Alemania', teléfono: '+34 604 90 50 00', email: 'markstein@gmail.com', etiquetas: ['C#', 'JAVA', 'REACT', 'HTML&CSS'],
  },
  {
    nombre: 'Shein McCain Black', ciudad: 'Londres', pais: 'UK', teléfono: '+34 611 92 11 60', email: 'shein_mckein@gmail.com', etiquetas: ['HTML&CSS', 'PHP'],
  },
  {
    nombre: 'kate Lovely Ress', ciudad: 'Manchester', pais: 'UK', teléfono: '+34 684 22 56 30', email: 'resslovely@gmail.com', etiquetas: ['HTML&CSS', 'REACT'],
  },
  {
    nombre: 'Enrique Sánchez Rius', ciudad: 'Málaga', pais: 'España', teléfono: '+34 611 39 33 71', email: 'esanchezrius@gmail.com', etiquetas: ['HTML&CSS', 'ANGULAR'],
  },
  {
    nombre: 'Marcos Ruiz Rius', ciudad: 'Las Palmas', pais: 'España', teléfono: '+34 689 65 06 0d0', email: 'mruiz_90@gmail.com', etiquetas: ['HTML&CSS', 'SYPHONY '],
  },
];

const colNames = ['nombre', 'ciudad', 'país', 'teléfono', 'email', 'etiquetas'];

const AdminMain = () => {
  return (
    <div className="admin-main">
      <AdminNavbar title="Alumnos" />
      <Table data={listAlumnos} colNames={colNames} />
    </div>
  );
};

export default AdminMain;
