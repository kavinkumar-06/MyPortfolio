import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Only required images
import bike from "../../Assets/Projects/bike.jpg";
import gym from "../../Assets/Projects/gym.jpg";
import numberplate from "../../Assets/Projects/numberplate.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have built using web and AI
          technologies.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 🚲 Bike Rental Booking System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Rental Booking System"
              description="A full-stack MERN web application that allows users to book bikes, manage rentals, and track booking history with secure JWT-based authentication."
              ghLink="https://github.com/kavinkumar-06"
              demoLink="https://bike-rental-booking-system-gamma.vercel.app/"
            />
          </Col>

          {/* 🚘 Vehicle Number Plate Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numberplate}
              isBlog={false}
              title="Vehicle Number Plate Detection"
              description="An AI-powered system developed using YOLO and OpenCV to accurately detect and extract vehicle number plates from images and video streams."
              ghLink="https://github.com/kavinkumar-06"
            />
          </Col>

          {/* 🏋️ AI Workout Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="AI Workout Assistant"
              description="Built with TensorFlow.js and MoveNet, it ensures privacy, supports custom workouts, and enables users to train and test models directly in the browser."
              ghLink="https://github.com/kavinkumar-06"
              demoLink="https://workout-assistant-cmoj98k8y-kavins-projects-b07d9fdd.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
