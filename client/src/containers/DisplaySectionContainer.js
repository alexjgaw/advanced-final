import { connect } from 'react-redux';
import DisplaySection from '../components/MainPage/DisplaySection/index';


const mapStateToProps = (state) => {
  return {
    organizations: state.mainPage.organizations,
    publicFigures: state.mainPage.publicFigures
  };
};

export default connect(
  mapStateToProps
)(DisplaySection);
