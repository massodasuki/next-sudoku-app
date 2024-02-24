import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './AmazonSize.module.css';
import SudokuBoard from './SudokuBoard';
import domtoimage from 'dom-to-image';

const MyComponent = () => {
  return (
    <div>
      <h2>My Custom Component</h2>
      <p>This is some custom content.</p>
    </div>
  );
};

const AmazonLetterSize = () => {
  const paperRef = useRef(null);

  const handleDownloadPDF = () => {
    if (!paperRef.current) return;

    domtoimage.toPng(paperRef.current)
      .then((dataUrl:string) => {
        const pdf = new jsPDF('p', 'in', 'letter');
        const imgWidth = 8.5;
        const imgHeight = (pdf.internal.pageSize.height * imgWidth) / pdf.internal.pageSize.width;

        pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Letter_Paper_Content.pdf');
      })
      .catch((error:string) => {
        console.error('Error converting to image:', error);
      });
  };

  const paperStyle = {
    width: '8.5in',  // Set width to 8.5 inches
    height: '11in',  // Set height to 11 inches
    margin: '20px auto',
    border: '1px solid #000',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  };


  return (
    <div className={styles.container}>
      <div ref={paperRef} className={styles.paper}>
        {/* <header>
          <h1>My Letter Paper</h1>
        </header> */}
        
        <section>
          <SudokuBoard />
        </section>

        <section>
          <SudokuBoard />
        </section>

        {/* <footer>
          <p>Page 1 of 1</p>
        </footer> */}
      </div>

      <button className={styles.downloadButton} onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};

export default AmazonLetterSize;
