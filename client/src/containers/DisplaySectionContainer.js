import { connect } from 'react-redux';
import DisplaySection from '../components/DisplaySection/index';


const mapStateToProps = (state) => {
  return {
    organizations: state.mainPage.organizations
  };
};

export default connect(
  mapStateToProps
)(DisplaySection);
