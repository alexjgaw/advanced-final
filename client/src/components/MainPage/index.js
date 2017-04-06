import React, { PropTypes } from 'react';
import TopNavbar from '../TopNavbar/index';
import Hero from './Hero/index';
import Explainer from './Explainer/index';
import DisplaySectionContainer from '../../containers/DisplaySectionContainer';
import Footer from '../Footer/index';

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <Hero />
      <TopNavbar />
      <Explainer />
      <DisplaySectionContainer
        organizations={props.organizations}
      />
      <Footer />
    </div>
  );
};

export default MainPage;

MainPage.propTypes = {
  organizations: PropTypes.array
};
