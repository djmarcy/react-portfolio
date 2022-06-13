import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const Pupdates = () => {
  return (
    <Row className="d-flex align-items-center" id="pupdates">
      <h2>Follow the Adventures of Dylan & Salem!</h2>
      <Col xs="12" md="6">
        <p>
          <i>
            Hi, I'm Salem! I'm a German Shepherd, and the light of Dylan's
            life!! I was born on 9/2/2020, and have been living with my dad
            since Halloween of that year (hence the name Salem! A spooky name
            for a spooky pup!). If you're interested in seeing or hearing more
            about me, make sure you check in her from time to time!
          </i>
        </p>

        <p>
          Salem's Pupdates will occasionally contain funny stories, updated
          pictures of her, and other fun little treasures from our time
          together! I'll probably archive previous entries at some point, but
          you may have to check back in to make sure you don't miss anything ;)
        </p>
      </Col>
      <Col xs="12" md="6">
        <Image src="./images/salem.jpg" className="salem-img" />
      </Col>
    </Row>
  );
};

export default Pupdates;
