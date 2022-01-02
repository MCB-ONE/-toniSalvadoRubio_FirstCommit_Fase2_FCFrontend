import React from 'react';
import CandidatoForm from '../../components/forms/CandidatoForm';
import Header from '../../components/layout/Header';

import './candidato.scss';

const CandidatoPage = () => {
  return (
    <>
      <Header />
      <main className=" candidate-dashboard">
        <CandidatoForm />
      </main>
    </>
  );
};

export default CandidatoPage;
