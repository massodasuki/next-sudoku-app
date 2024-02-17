import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MyComponent = () => {
  return (
    <div>
      <h2>My Custom Component</h2>
      <p>This is some custom content.</p>
    </div>
  );
};

const A4Paper = () => {
  const paperRef = useRef(null);

  const handleDownloadPDF = () => {
    if (!paperRef.current) return;

    html2canvas(paperRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('A4_Paper_Content.pdf');
    });
  };

  const paperStyle = {
    width: '210mm',
    height: '297mm',
    margin: '20px auto',
    border: '1px solid #000',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <div ref={paperRef} style={paperStyle}>
      <header>
        <h1>My A4 Paper</h1>
      </header>
      
      <section>
        <MyComponent />
      </section>

      <footer>
        <p>Page 1 of 1</p>
      </footer>

      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};

export default A4Paper;
