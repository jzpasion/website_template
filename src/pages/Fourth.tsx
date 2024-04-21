import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import first_pic from "../components/Icons/pic.png";
import second_pic from "../components/Icons/pic.png";
import third_pic from "../components/Icons/pic.png";
import fourth_pic from "../components/Icons/pic.png";
import { Fade, Bounce } from "react-awesome-reveal";
import "../styles/Fourth.css";

export default function Fourth() {
  return (
    <div className="Fourth_container">
      <Container>
        <Row>
          <Col>
            <Fade direction="down">
              <p className="intro_4">Insert Text here</p>
              <p className="sub_intro_4">
                "Insert Sub Intro"
              </p>
            </Fade>
          </Col>
        </Row>
        <Row className="picture_group" xs={1} md={4}>
          <Col>
            <Bounce>
              <div className="img_1">
                <img src={first_pic} alt="" />
              </div>
            </Bounce>
          </Col>
          <Col>
            <Bounce delay={100}>
              <div className="img_2">
                <img src={second_pic} alt="" />
              </div>
            </Bounce>
          </Col>
          <Col>
            <Bounce delay={200}>
              <div className="img_3">
                <img src={third_pic} alt="" />
              </div>
            </Bounce>
          </Col>
          <Col>
            <Bounce delay={300}>
              <div className="img_4">
                <img src={fourth_pic} alt="" />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
