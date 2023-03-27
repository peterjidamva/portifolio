import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eastc from "../../Assets/Projects/shortcourse.png";
import chat from "../../Assets/Projects/chat.png";
import web3 from "../../Assets/Projects/4.png";
import dex from "../../Assets/Projects/6.png";
import goat from "../../Assets/Projects/3.png";
import stei from "../../Assets/Projects/2.png";
import todo from "../../Assets/Projects/5.png";
import trims from "../../Assets/Projects/7.png";


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
              title="Short Course Online Application"
              description="Students can apply for short courses on the website and will be notified on their mobile phone number when they are accepted. The website is made with PHP using Yii framework.
              ."
              link="https://shortcourse.eastc.ac.tz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dex}
              isBlog={false}
              title="Nft Puzzle"
              description="
              This is a very enjoyable puzzle game. You can move the pieces by dragging them to the desired position. It may take a few minutes to get the hang of the game. Have fun!
              This is the ultimate puzzle game for the whole family. It is simple to play but tricky to solve. There are over 50 images to solve.
              MADE WITH FLUTTER."
              link="https://play.google.com/store/apps/details?id=app.jidamva.puzzle"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stei}
              isBlog={false}
              title="STEI"
              description="STEI is a Tanzanian real estate platform that connects buyers and sellers of houses, frames, and land plots. It aims to make real estate more affordable and accessible by eliminating the need for agents and bureaucracy."
              link="https://stei.co.tz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Web3 Gallery"
              description="I created this open-source Flutter app to showcase NFTs and their prices using the OpenSea API. It has a user-friendly interface for browsing NFTs and connecting wallets to view and trade collections. It provides a convenient and accessible way to explore and participate in the NFT market."
              link="https://github.com/peterjidamva/Web3Gallery"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trims}
              isBlog={false}
              title="TRIMS Website"
              description="Trims.ac.tz is the official website of the Tanzania Research and Innovation Management Society (TRIMS)."
              link="https://trims.ac.tz/"
            />
          </Col>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goat}
              isBlog={false}
              title="Goat Game"
              description="I created this open source project . Goat Game is a mobile application game built using Flutter for the aim of learning and understanding flutter concepts on animations , object manipulation and layout."
              link="https://github.com/peterjidamva/GoatGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              description="I created this open source project. Chat App is a mobile application that enables users to chat with one another, built with Flutter as the frontend and Firebase as the backend."
              link="https://github.com/peterjidamva/FlutterChatt"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Track Your tasks"
              description="Mobile App that allow you to Write a list of tasks you want to do in a day , mark them as done when finished
              Have a track of your accomplishments."
              link="https://play.google.com/store/apps/details?id=com.mrogtzapptodo.todo_app&hl=en&gl=US"
            />
          </Col>


         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
