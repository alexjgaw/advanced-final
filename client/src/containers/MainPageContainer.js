import { connect } from 'react-redux';
import MainPage from '../components/MainPage/index';
import {
  organizationListLoad,
} from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    onOrganizationsLoad: () => {
      dispatch(organizationListLoad());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
