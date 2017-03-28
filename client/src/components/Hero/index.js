import React from 'react';
import { Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/index';
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
              <h2><span className="fancy">f</span>eeling overwhelmed in the face of
              institutional bigotry, ignorance, and inequality?</h2>
              <h3><Logo /></h3>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    </div>
  );
};

export default Hero;
