import React, { Component, PropTypes } from 'react';
import Explainer from './Explainer/index';
import DisplaySectionContainer from '../../containers/DisplaySectionContainer';

class MainPage extends Component {

  componentDidMount() {
    this.props.onOrganizationsLoad();
    this.props.onPublicFiguresLoad();
  }

  render() {
    return (
      <div className="MainPage">
        <Explainer />
        <DisplaySectionContainer />
      </div>
    );
  }
}

export default MainPage;

MainPage.propTypes = {
  onOrganizationsLoad: PropTypes.func,
  onPublicFiguresLoad: PropTypes.func
};
