import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center", paddingTop: "120px" }}>
        <h1 style={{ color: "white", marginBottom: "30px" }}>
          Download My Resume
        </h1>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Button
          variant="primary"
          href="/Kavin_Kumar_Resume.pdf"
          target="_blank"
          download
          style={{
            padding: "12px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
          }}
        >
          ⬇ Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
