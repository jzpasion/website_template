import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import IconImg from "../components/Icons/Icon.png";
import emote_1 from "../components/Icons/emote_1.png";
import emote_2 from "../components/Icons/emote_2.png";
import emote_3 from "../components/Icons/emote_3.png";
import emote_4 from "../components/Icons/emote_4.png";
import emote_5 from "../components/Icons/emote_5.png";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import "../styles/Second.css";

export default function Second() {
  return (
    <div className="second_container">
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
          <JackInTheBox>
            <div className="card_isla">
              <div className="img_holder">
                <img src={IconImg} alt="" />
              </div>
            </div>
          </JackInTheBox>
        </Row>
        <Row>
          <div className="isla_aira">User Image</div>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            <Fade direction="left" duration={1000}>
              <Card className="card_hours">
                <Card.Title className="card_title">Hours Watched</Card.Title>
                <Card.Body className="card_body">451</Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col>
            <Fade direction="right" duration={1000}>
              <Card className="card_sent">
                <Card.Title className="card_title">Chats Sent</Card.Title>
                <Card.Body className="card_body">6,013</Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            <Fade direction="left" duration={1200}>
              <Card className="card_earned">
                <Card.Title className="card_title">
                  Channel Points Earned
                </Card.Title>
                <Card.Body className="card_body">219,660</Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col>
            <Fade direction="right" duration={1200}>
              <Card className="card_emotes">
                <Card.Title className="card_title">
                  My favorite emotes
                </Card.Title>
                <Card.Body className="emotes">
                  <img src={emote_1} alt="" />
                  <img src={emote_4} alt="" />
                  <img src={emote_3} alt="" />
                  <img src={emote_2} alt="" />
                  <img src={emote_5} alt="" />
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
