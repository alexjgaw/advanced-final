import { connect } from 'react-redux';
import Hero from '../components/MainTemplate/Hero/index';
import {
  getHeroHeight
} from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    onGetHeroHeight: (height) => {
      dispatch(getHeroHeight(height));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Hero);
