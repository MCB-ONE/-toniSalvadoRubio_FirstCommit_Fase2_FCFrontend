import React from 'react';
import Header from '../../components/layout/Header';
import AdminPanel from '../../components/layout/Admin/AdminPanel';
/** Import styles */
import './alumnos.scss';

const AlumnosPage = () => {
  return (
    <div className="alumnos">
      <Header />
      <main>
        <AdminPanel />
      </main>
    </div>
  );
};

export default AlumnosPage;
