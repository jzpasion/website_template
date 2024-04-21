import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import first_pic from "../components/Icons/pic_1.png";
import second_pic from "../components/Icons/pic_1.png";
import "../styles/Fifth.css";
import { Fade, Rotate } from "react-awesome-reveal";

export default function Fifth() {
  return (
    <div className="Fifth_container">
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
          <Col>
            <Rotate direction="bottom-left">
              <div className="pic_1">
                <img src={first_pic} alt="" />
              </div>
            </Rotate>
          </Col>
          <Col>
            <Rotate direction="bottom-right">
              <div className="pic_2">
                <img src={second_pic} alt="" />
              </div>
            </Rotate>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
