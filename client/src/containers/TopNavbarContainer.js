import { connect } from 'react-redux';
import TopNavbar from '../components/MainTemplate/TopNavbar/index';


const mapStateToProps = (state) => {
  return {
    heroHeight: state.mainPage.heroHeight
  };
};

export default connect(
  mapStateToProps
)(TopNavbar);
