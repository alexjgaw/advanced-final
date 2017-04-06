import React, { Component, PropTypes } from 'react';
import TopNavbar from '../TopNavbar/index';
import Hero from './Hero/index';
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
        <Hero />
        <TopNavbar />
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
