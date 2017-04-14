import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/index';

const AboutPage = () => {
  return (
    <div id="AboutPage">
      <Grid>
        <Row>
          <Col md={6}>
            <h1>About the Project</h1>
            <p>
              <Logo /> began as the final project for the Advanced course at Austin Coding Academy.
              I was talking to my instructor Ivo about Trump's latest tweet. I don't remember
              specifically what it was, but it's safe to assume it was horrible. And I said
              "Wouldn't it be great if there were an app that automatically donated to a
              relevant organization every time he tweeted something crappy about a certain
              issue? So every time he says something terrible about a cause,
              the users automatically fund it." Ivo said yeah, it would be really cool
              to have an app like that, and I should make it.
            </p>
            <p>
              I said, "That sounds really hard!"
            </p>
            <p>
              Then I said, "Okay!"
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default AboutPage;
