/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const PdfReader = ({ cvFile, viewPdf }) => {
  console.log(cvFile);
  return (
    <div className="curriculum">
      <object id="pdfreader" data={viewPdf ? cvFile : null} type="application/pdf" aria-label="Lector de pdf" className="pdf-reader" />
    </div>
  );
};

PdfReader.propTypes = {
  cvFile: PropTypes.object.isRequired,
  viewPdf: PropTypes.bool.isRequired,
};

export default PdfReader;
