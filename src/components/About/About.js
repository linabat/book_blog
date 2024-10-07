import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import bookstack from "../../Assets/stacked_books.png";
import GeneralStats from "./GeneralStats";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Personal Reading <strong className="purple">Statistics</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={bookstack} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Over the <strong className="purple">Years </strong>
        </h1>

        <GeneralStats />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
