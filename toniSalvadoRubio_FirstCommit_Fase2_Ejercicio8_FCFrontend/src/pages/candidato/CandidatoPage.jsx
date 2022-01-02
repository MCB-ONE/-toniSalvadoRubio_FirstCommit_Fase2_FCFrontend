/* eslint-disable no-console */
import React, { useState } from 'react';
import CandidatoForm from '../../components/forms/CandidatoForm';
import PdfReader from '../../components/layout/Admin/PdfReader';
import Header from '../../components/layout/Header';

import './candidato.scss';

const CandidatoPage = () => {
  // Pdf state manager and events to show it
  // State to save de path
  const [cvFile, setCvFile] = useState('');
  const [cvFileError, setCvFileError] = useState('');
  // State to show pdf file
  const [viewPdf, setViewPdf] = useState(false);

  const fileType = ['application/pdf'];
  const handlerPdfFileChange = (event) => {
    const { target } = event;
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        const fileUrl = URL.createObjectURL(selectedFile);
        setCvFile(fileUrl);
        setCvFileError('');
        setViewPdf(true);
        target.value = '';
      } else {
        setCvFile('');
        setViewPdf(false);
        setCvFileError('Por favorseleccione un PDF');
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('Selecciona tu cv');
    }
  };

  const deleteFile = () => {
    setCvFile('');
  };

  return (
    <>
      <Header />
      <main className=" candidate-dashboard">
        <CandidatoForm
          handlerPdfFileChange={handlerPdfFileChange}
          cvFileError={cvFileError}
          setViewPdf={setViewPdf}
          deleteFile={deleteFile}
        />
        <PdfReader
          cvFile={cvFile}
          viewPdf={viewPdf}
        />
      </main>
    </>
  );
};

export default CandidatoPage;
