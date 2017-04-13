import React, { PropTypes } from 'react';
import HeroContainer from '../../containers/HeroContainer';
import TopNavbarContainer from '../../containers/TopNavbarContainer';
import Footer from './Footer/index';

const MainTemplate = (props) => {
  return (
    <div id="MainTemplate">
      <HeroContainer />
      <TopNavbarContainer />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.array
};
