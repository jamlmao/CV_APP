import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Projects'

  function App() {
      const cvRef = useRef(null);

      const handleDownload = async () => {
        const element = cvRef.current;
        const canvas = await html2canvas(element, {
          scale: 2, // Better resolution
          useCORS: true, // Handle cross-origin images
          backgroundColor: '#ffffff', // White background
          logging: true,
          width: element.scrollWidth,
          height: element.scrollHeight,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = canvas.width / canvas.height;
        const width = pageWidth;
        const height = width / ratio;

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('my-cv.pdf');
      };

      return (
        <div className="app-container">
          <button 
            onClick={handleDownload}
            className="downloadButton"
          >
            Download CV
          </button>
          <div ref={cvRef} className="cv-container">
            <Personal />
            <Introduction />
            <Experience />
            <Education />
            <Skill />
            <Project />
          </div>
        </div>
      );
  }


export default App