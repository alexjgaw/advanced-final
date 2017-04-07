import React, { Component, PropTypes } from 'react';
import TopNavbarContainer from '../../containers/TopNavbarContainer';
import HeroContainer from '../../containers/HeroContainer';
import Explainer from './Explainer/index';
import DisplaySectionContainer from '../../containers/DisplaySectionContainer';
import Footer from '../Footer/index';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onOrganizationsLoad();
  }

  render() {
    return (
      <div className="MainPage">
        <HeroContainer />
        <TopNavbarContainer />
        <Explainer />
        <DisplaySectionContainer />
        <Footer />
      </div>
    );
  }
}

export default MainPage;

MainPage.propTypes = {
  onOrganizationsLoad: PropTypes.func
};
