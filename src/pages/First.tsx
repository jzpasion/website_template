import React from "react";
import Typed from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import iconBanner from "../components/Icons/banner.png";
import bits from "../components/Icons/bits-01.png";
import smile from "../components/Icons/smile.png";
import founder from "../components/Icons/founder.png";
import { Fade } from "react-awesome-reveal";

import "../styles/First.css";

export default function First() {
  return (
    <div className="first_container" style={{ backgroundColor: "#1C768F" }}>
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
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Fade direction="up">
              <div className="twitch_layout">
                <div className="isla_banner">
                  <img src={iconBanner} alt="" />
                </div>
                <div className="twitch_chat_header">
                  <p>Chat</p>
                </div>

                <div className="twitch_chat">
                  <p>Welcome to Insert Name chat room!</p>
                </div>
                <div className="twitch_chat_input">
                  <img className="chat_founder" src={founder} alt="" />
                  <Typed
                    className="type_chat"
                    strings={[
                      "First chat text",
                      "Second chat text",
                      "Third chat text",
                      "Fourth chat text",
                    ]}
                    typeSpeed={130}
                    backSpeed={80}
                    loop
                  />
                  <img className="chat_smile" src={smile} alt="" />
                  <img className="chat_bits" src={bits} alt="" />
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
