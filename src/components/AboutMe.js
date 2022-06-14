import React from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Image,
  ListGroup as ul,
  ListGroupItem as li,
} from "react-bootstrap";

const AboutMe = () => {
  return (
    <Row className="top-row d-flex align-items-center" id="about-me">
      <h2>About Dylan</h2>
      <Col xs="12" md="6">
        <Image src="./images/dylan.jpg" className="dylan-img" />
      </Col>
      <Col xs="12" md="6">
        <p>
          I'm Dylan. I do stuff. Cool stuff. On the computer. Like make awesome
          websites, and communications specializing, and browse Reddit for like
          8 hours at a time. Just... you know... Cool guy stuff because that's
          what I am, a cool guy. I have a passion for making websites come to
          life, and love taking whatever crazy ideas you have and making them
          become a reality!
        </p>
        <p>
          I live with my pup, Salem (who you'll see below, I promise) in
          Colorful Colorado. While I currently work in communications, I have a
          background in everything from web dev to community management to
          customer service. My wide range and versatile skillset make me an
          asset to any team, and I enjoy finding my niche wherever I end up!
        </p>

        <h3>Dylan Specialties Include:</h3>
        <ul>
          <li>Website Development</li>
          <li>Communications</li>
          <li>Things & Stuff!</li>
        </ul>

        <h3>Give Dylan Money Today!</h3>
        <p>Hire me. Or don't. I don't care.</p>
        <p>
          <i>
            (Yes, yes I do. Please hire me. I like paying my rent. Thank you.)
          </i>
        </p>
        <a
          href="https://drive.google.com/file/d/1VE5tHcHBMu8tl2tBbiH6kBJyHZ_rLHFL/view"
          className="btn about-me-btn"
        >
          Check Out My Resume!
        </a>
      </Col>
    </Row>
  );
};
export default AboutMe;
