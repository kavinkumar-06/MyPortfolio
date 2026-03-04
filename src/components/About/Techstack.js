import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>Node.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>MySQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "14px", marginTop: "8px" }}>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
