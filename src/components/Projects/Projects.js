import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eastc from "../../Assets/Projects/eastc.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Web3 Gallery"
              description="Amobile Applicationn that enables you to get news about blockchain and able to view different nfts also able to view your own nft by connecting your wallet."
              link="https://github.com/peterjidamva/Web3Gallery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Goat Game"
              description="A mobile Game of A GOAT built using Flutter."
              link="https://github.com/peterjidamva/GoatGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chat APp"
              description="Mobile App that allow two users to chat each other using firebase and flutter
        ."
              link="https://github.com/peterjidamva/FlutterChatt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eastc}
              isBlog={false}
              title="Short Course Application"
              description="Project for Appliying fpr shortcourses at EAST AFRICAN STATISTICAL TRAINING CENTRE."
              link="https://shortcourse.eastc.ac.tz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Simple React Exchange"
              description="ERC Token on Polygon Blockchain with React Frontend that enables you to send , Buy and receive Tokens "
              link="https://github.com/peterjidamva/Blockchain-interaction-with-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
