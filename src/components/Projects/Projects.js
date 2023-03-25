import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eastc from "../../Assets/Projects/shortcourse.png";
import chat from "../../Assets/Projects/chat.png";
import web3 from "../../Assets/Projects/web3.png";
import dex from "../../Assets/Projects/6.png";
import goat from "../../Assets/Projects/goat.png";
import stei from "../../Assets/Projects/2.png";

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
              imgPath={eastc}
              isBlog={false}
              title="Short Course Application"
              description="Project for Appliying for shortcourses at EAST AFRICAN STATISTICAL TRAINING CENTRE."
              link="https://shortcourse.eastc.ac.tz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dex}
              isBlog={false}
              title="Nft Puzzle"
              description="A puzzle Game of Your Favourite Nfts made with flutter."
              link="https://play.google.com/store/apps/details?id=app.jidamva.puzzle"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stei}
              isBlog={false}
              title="STEI"
              description="A website for listing and selling real estate."
              link="stei.co.tz"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Web3 Gallery"
              description="Amobile Applicationn that enables you to get news about blockchain and able to view different nfts also able to view your own nft by connecting your wallet."
              link="https://github.com/peterjidamva/Web3Gallery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goat}
              isBlog={false}
              title="Goat Game"
              description="A mobile Game of A GOAT built using Flutter."
              link="https://github.com/peterjidamva/GoatGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              description="Mobile App that allow two users to chat each other using firebase and flutter
        ."
              link="https://github.com/peterjidamva/FlutterChatt"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
