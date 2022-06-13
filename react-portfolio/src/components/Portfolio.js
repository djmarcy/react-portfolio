import React from "react";
import { Col, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <Row id="portfolio">
        <h2>Portfolio</h2>
        <p className="fs-5">
          Deployed projects can be found by selecting the corresponding project
          card. All links will open in a new tab. See the buttons below each
          project card to see the project repository.
        </p>
      </Row>

      <Row>
        <a
          href="https://djmarcy.github.io/palabra/"
          target="_blank"
          className="project-anchor"
        >
          <div className="highlighted-project opactity">
            <div className="highlight-label">Palabra</div>
          </div>
        </a>

        <a
          href="https://github.com/djmarcy/palabra"
          target="_blank"
          type="button"
          className="btn btn-primary portfolio-button highlighted-button"
        >
          GitHub Repo
        </a>
      </Row>

      <Row className="project-carousel">
        <h3>Other Projects Include:</h3>
        <Col>
          <a href="https://djmarcy.github.io/pt-planner" target="_blank">
            <div class="other-projects project-1 opacity">
              <div className="other-projects-label label-1">
                Daily
                <br />
                Planner
              </div>
            </div>
          </a>

          <a href="https://github.com/djmarcy/pt-planner" target="_blank">
            <button
              type="button"
              className="btn btn-primary portfolio-button"
              target=""
              _blank
            >
              GitHub Repo
            </button>
          </a>
        </Col>
        <Col>
          <a href="https://djmarcy.github.io/forecast-tracker" target="_blank">
            <div class="other-projects project-2 opacity">
              <div className="other-projects-label label-2">
                Forecast
                <br />
                Tracker
              </div>
            </div>
          </a>

          <a href="https://github.com/djmarcy/forecast-tracker" target="_blank">
            <button
              type="button"
              className="btn btn-primary portfolio-button"
              target=""
              _blank
            >
              GitHub Repo
            </button>
          </a>
        </Col>
        <Col>
          <a href="https://djmarcy.github.io/pt-password-gen" target="_blank">
            <div className="other-projects project-3 opacity">
              <div className="other-projects-label label-3">
                Password
                <br />
                Generator
              </div>
            </div>
          </a>

          <a href="https://github.com/djmarcy/pt-password-gen" target="_blank">
            <button
              type="button"
              className="btn btn-primary portfolio-button other-btn"
              target=""
              _blank
            >
              GitHub Repo
            </button>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Portfolio;
