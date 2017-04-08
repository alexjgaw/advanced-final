import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import EntitiesDisplay from './EntitiesDisplay/index';
// import './index.css';

class DisplaySection extends Component {
  render() {
    return (
      <div className="DisplayWho">
        <Grid>
          <Row>
            <Col md={6}>
              <EntitiesDisplay
                title="Organizations"
                entities={this.props.organizations}
                org
              />
            </Col>
            <Col md={6}>
              <EntitiesDisplay
                title="Public Figures"
                entities={this.props.publicFigures}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DisplaySection;

DisplaySection.propTypes = {
  organizations: PropTypes.array.isRequired,
  publicFigures: PropTypes.array.isRequired
};
