import { connect } from 'react-redux';
import DisplaySection from '../components/DisplaySection/index';
import {
  organizationListLoad,
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrganizationsLoad: () => {
      dispatch(organizationListLoad());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySection);
