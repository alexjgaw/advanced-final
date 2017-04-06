import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import EntitiesDisplay from './EntitiesDisplay/index';
// import './index.css';

class DisplaySection extends Component {
  componentDidMount() {
    this.props.onOrganizationsLoad();
  }

  render() {
    return (
      <div className="DisplayWho">
        <Grid>
          <Row>
            <Col md={6}>
              <EntitiesDisplay
                title="Organizations"
                entities={this.props.organizations}
              />
            </Col>
            <Col md={6}>
              <EntitiesDisplay
                title="Politicians"
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
  onOrganizationsLoad: PropTypes.func
};
