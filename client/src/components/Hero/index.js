import React from 'react';
import { Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';
import './index.css';

const Hero = () => {
  return (
    <div className="Hero">
      <Jumbotron>
        <Grid>
          <Row className="hero-row">
            <Col md={6}>
              <Image src={require('../../images/prestweet.png')} responsive />
            </Col>
            <Col md={6} className="hero-text">
              <h2>Tired of feeling helpless in the face of bigotry, ignorance, and hate?</h2>
              <h3>eff THAT</h3>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    </div>
  );
};

export default Hero;
