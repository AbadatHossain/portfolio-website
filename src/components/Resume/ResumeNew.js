import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://drive.google.com/file/d/1ZjYbUOfePUs31QRaRz8N7p3ErlAG0eVc/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(950);


  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1ZjYbUOfePUs31QRaRz8N7p3ErlAG0eVc/view?usp=sharing"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      
        
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
