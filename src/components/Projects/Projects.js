import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCardSpecail from "./ProjectCardsSpecials";
import Particle from "../Particle";
import AmmerDarek from "../../Assets/Projects/ammer Darek.jpg";
import eshop from "../../Assets/Projects/eshop.png";
import bookify from "../../Assets/Projects/bookify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCardSpecail
              imgPath={AmmerDarek}
              isBlog={false}
              title="Ammer Darek"
              description="A user-friendly mobile application that enables users to buy and sell online, focusing on doors and windows made of wood and aluminum. The app features a modern interface that showcases products with detailed descriptions and prices, allowing users to easily connect with sellers to complete transactions seamlessly."
              ghLink="https://github.com/APPmobileAHMED/-"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookify}
              isBlog={false}
              title="Bookify"
              description="To create a comprehensive booking platform that caters to travelers' needs by providing a seamless experience from searching for accommodations to booking and managing their stays."
              ghLink="https://github.com/Ahmedgafsi/thesisProject"
              demoLink="https://drive.google.com/file/d/13DugvBUcK5ts7SdjU2UBosMt-q7DM2oR/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eshop}
              isBlog={false}
              title="E-shop"
              description="Shop the latest electronics, including smartphones, laptops, and PCs, from top brands at competitive prices. Enjoy a seamless shopping experience with secure payments and fast delivery. Find everything you need, all in one place!"
              ghLink="https://github.com/Ecommerce-Project-RBK/E-Shop"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
