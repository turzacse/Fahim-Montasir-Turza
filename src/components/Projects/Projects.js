import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bangla from "../../Assets/Projects/bangla.PNG";
import speedy from "../../Assets/Projects/speedy.PNG";
import tastebud from "../../Assets/Projects/tastebud.PNG";

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
              imgPath={speedy}
              isBlog={false}
              title="Speedy Send"
              description="Speedy-Send is a Full stack project. Its a courier service type web based project. Here implemented the different dashboard for user, deliveryMen and Admin(Special User). An user can booked a parchel providing the actual info, than the Admin can assign a deliverymen for this parcel. After that this deliverymen can manage this parcels."
              ghLink="https://github.com/turzacse/speedy-sent-client"
              demoLink="https://speedy-981eb.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tastebud}
              isBlog={false}
              title=" Tastebud Tavern"
              description="Its a restaurant management Project, where an user can show the top sellingfoofd in the home page. He/she can added a food item but can not patches his/her added food. He/she can parched only other’s added food to the restaurant. He/she can see his/her added food and manage also this."
              ghLink="https://github.com/turzacse/Tastebud-Tavern-Client"
              demoLink="https://tastebud-tavern.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bangla}
              isBlog={false}
              title="Bangla Bites"
              description="Its a brand shop web project. Here placed many brand,Where an user can show theire brand-wise product. He/She can add to cart the product, for buying process."
              ghLink="https://github.com/turzacse/Bangla-Bites-Client"
              demoLink="https://bangla-bites.web.app"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
