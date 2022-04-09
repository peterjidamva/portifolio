import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Peter Jidamva </span>
            from <span className="purple"> Dar es salaam, Tanzania.</span>
            <br />I am Computer Science student at <span className="purple">  University of dar es salaam</span>
            <br />
            <br />
            Apart from coding, some other things that I love !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Barcelona Football Club
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music [Kendrick Lamar , J cole , NF , Kanye west]
            </li>
          </ul>

          <p style={{ color: "#0096FF" }}>
            "I find happiness in solving Problems"{" "}
          </p>
          <footer className="blockquote-footer">Jidamva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
