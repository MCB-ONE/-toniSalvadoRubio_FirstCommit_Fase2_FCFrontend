/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import DataTable from '../../dataTable/DataTable';
import AdminNavbar from './AdminNavbar';
import Th from '../../dataTable/Th';
import removeAccents from '../../../helpers/removeAccents';
/** Test Data import */
import json from '../../../data/alumnos.json';

const searchableColumns = ['nombre', 'email', 'ciudad'];

const AdminMain = () => {
  const [state, setState] = useState({
    data: json,
    sortedBy: { nombre: 'ascending' },
  });

  const [query, setQuery] = useState('');

  // Search method
  const search = (data) => {
    return data.filter((row) => searchableColumns.some(
      (column) => row[column]
        .toString()
        .toLowerCase()
        .indexOf(query.toLowerCase()) > -1,
    ));
  };

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];

    setState((prev) => ({
      ...prev,
      // Sort method
      data: prev.data.sort((a, b) => {
        if (direction === 'ascending') {
          if (removeAccents(a[sortKey]) > removeAccents(b[sortKey])) return 1;
          if (removeAccents(a[sortKey]) < b[sortKey]) return -1;
          return 0;
        }
        if (removeAccents(a[sortKey]) < removeAccents(b[sortKey])) return 1;
        if (removeAccents(a[sortKey]) > removeAccents(b[sortKey])) return -1;
        return 0;
      }),
    }));
  }, [state.sortedBy]);

  // UseEffect to dispatch search filter
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: search(json),
    }));
  }, [query]);

  return (
    <div className="admin-main">
      <AdminNavbar title="Alumnos" query={query} setQuery={setQuery} />
      <DataTable
        items={state.data}
        renderHeaad={() => (
          <tr>
            <Th
              label="nombre"
              sortedBy={state.sortedBy}
              sort={{ key: 'nombre', changer: setState }}
            />
            <Th
              label="ciudad"
              sortedBy={state.sortedBy}
              sort={{ key: 'ciudad', changer: setState }}
            />
            <Th
              label="país"
              sortedBy={state.sortedBy}
              sort={{ key: 'país', changer: setState }}
            />
            <th>teléfono</th>
            {/* <Th
              label="teléfono"
            /> */}
            <Th
              label="email"
              sortedBy={state.sortedBy}
              sort={{ key: 'email', changer: setState }}
            />
            <Th
              label="etiquetas"
              sortedBy={state.sortedBy}
              sort={{ key: 'etiquetas', changer: setState }}
            />
          </tr>
        )}
        renderRow={(row) => (
          <tr>
            <td key={0}>{row.nombre}</td>
            <td key={1}>{row.ciudad}</td>
            <td key={2}>{row.país}</td>
            <td key={3} className="num">{row.teléfono}</td>
            <td key={4}>{row.email}</td>
            <td className="tags" key={5}>
              <span key={0}>{row.etiquetas[0]}</span>
              <span key={1}>{row.etiquetas[1]}</span>
              {row.etiquetas.length >= 3 ? (
                <span key={2} className="num">
                  +
                  {row.etiquetas.length - 2}
                </span>
              ) : null}
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default AdminMain;
