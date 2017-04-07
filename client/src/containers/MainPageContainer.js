import { connect } from 'react-redux';
import MainPage from '../components/MainPage/index';
import {
  organizationListLoad,
  publicFigureListLoad
} from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    onOrganizationsLoad: () => {
      dispatch(organizationListLoad());
    },
    onPublicFiguresLoad: () => {
      dispatch(publicFigureListLoad());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
