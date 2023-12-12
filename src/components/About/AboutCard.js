import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fahim Montasir Turza </span>
            from <span className="purple"> Mymensingh, Bangladesh.</span>
            <br />
            A passionate <span className="purple">MERN</span> stack developer with a keen interest in backend development.
            <br />
            I am the final year student of <span className="purple">B.Sc Engineering</span>, Department of <span className="purple">CSE</span> at Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Gopalgonj
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movie
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
