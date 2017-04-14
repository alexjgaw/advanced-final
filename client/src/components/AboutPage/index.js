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
            <p className="justify-text">
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
            <p className="justify-text">
            As you can tell, I tend to choose ambitious projects when I'm just getting started.
            I also prefer to choose projects that align with my values. This is a
            great example. I'm passionate about social-justice issues and thought
            there should be an easy, public way for people to engage with the president
            (and those associated with him) on the issues they care about. Not everybody
            has the time/energy for phone calls, letters, rallies, or thinkpieces. Most
            people don't have the extra money to donate large sums to causes
            they otherwise support. <strong>But!</strong> Many people can afford to donate
            small amounts. That's where <Logo /> comes in. Each individual contribution
            might not be much, but together maybe we can make a real difference.
            Either the people in power will fund organizations they oppose, or they'll
            stop spewing vitriol about them. Either way it's a win.
            </p>
          </Col>
          <Col md={6}>
            <img src="http://placehold.it/300x250" alt="placeholder" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src="http://placehold.it/300x250" alt="placeholder" />
          </Col>
          <Col md={6}>
            <h1>About the Developer</h1>
            <p className="justify-text">
              My name is Alex Gaw. I'm a recent graduate of Austin Coding Academy,
              a full-stack web development program here in Austin, Texas.
            </p>
            <p>

            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default AboutPage;
