import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Card id="contact-me" className="contact-container">
      <Card.Title>
        <h2>Contact Dylan</h2>
      </Card.Title>
      <Row>
        <Col className="col-border">
          <div class="contact-title">GitHub:</div>
          <a href="#">http://www.github.com/djmarcy</a>
          <hr />
          <div class="contact-title">LinkedIn:</div>
          <a href="#">http://www.linkedin.com/djmarcy</a>
        </Col>

        <Col>
          <div class="contact-title">Email:</div>
          <a href="mailto:contact@djmarcy.com">contact@djmarcy.com</a>
          <hr />
          <div class="contact-title">Phone Number:</div>
          <a href="tel:9706720633">(970) 672-0633</a>
        </Col>
      </Row>
    </Card>
  );
};

export default Contact;
