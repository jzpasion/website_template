import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import first_pic from "../components/Icons/first_pic.png";
import second_pic from "../components/Icons/first_pic.png";
import { Fade, Bounce } from "react-awesome-reveal";

import "../styles/Third.css";

export default function Third() {
  return (
    <div className="Third_container" style={{ backgroundColor: "green" }}>
      <Container>
        <Row>
          <Col>
            <Fade direction="down">
              <p className="intro">Insert Text here</p>
              <p className="sub_intro">
                "Insert Sub Intro"
              </p>
            </Fade>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className="text_center">
            <div className="caption">Caption</div>
          </Col>
          <Col>
            <Bounce>
              <div className="first_pic">
                <img src={first_pic} alt="" />
              </div>
            </Bounce>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            <Bounce>
              <div className="second_pic">
                <img src={second_pic} alt="" />
              </div>
            </Bounce>
          </Col>
          <Col className="text_center">
            <div className="caption">Caption</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
