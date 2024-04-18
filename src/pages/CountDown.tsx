import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/CountDown.css";
import { useState } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const year = new Date().getFullYear();
  const flight = new Date(year, 1, 4).getTime();

  setInterval(function () {
    const today = new Date().getTime();
    let diff;
    diff = flight - today;

    // math
    let daysMath = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hoursMath = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesMath = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secondsMath = Math.floor((diff % (1000 * 60)) / 1000);
    setDays(daysMath);
    setHours(hoursMath);
    setMinutes(minutesMath);
    setSeconds(secondsMath);
  }, 1000);

  return (
    <div className="CountDown_container">
      <Container>
        <Row>
          <Col>
            <Fade direction="down">
              <p className="intro_5">
                Kosumoooo sweetiee Today is your flight I can finally see you
                again~ please take care and have safe flight!{" "}
              </p>
              <p className="sub_intro_5">
                I can't wait to see and hug youuu, Iloveyouuuu~
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
      {/* <AttentionSeeker effect='tada'>

                <div className='counter_container'>
                    <div className='days_wrapper'>
                        <div className='numbers'>{days}</div>
                        Days
                    </div>
                    <div className='hours_wrapper'>
                        <div className='numbers'>{hours}</div>
                        Hours
                    </div>
                    <div className='minutes_wrapper'>
                        <div className='numbers'>{minutes}</div>
                        Minutes
                    </div>
                    <div className='seconds_wrapper'>
                        <div className='numbers'>{seconds}</div>
                        Seconds
                    </div>
                </div>
            </AttentionSeeker> */}
    </div>
  );
}
