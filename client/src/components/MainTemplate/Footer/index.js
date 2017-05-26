import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

const Footer = () => {
  return (
    <div id="Footer">
      <Grid>
        <Row>
          <Col md={4} className="footer-section">
            <h3>fund THAT</h3>
            <ul>
              <li>Sign Up</li>
              <li>Sign In</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h3>Developers</h3>
            <ul>
              <li>Team</li>
              <li>Contribute</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li>GitHub</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Alex Gaw</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Footer;
