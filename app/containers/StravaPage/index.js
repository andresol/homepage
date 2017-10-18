import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from 'components/Nav';
import { createStructuredSelector } from 'reselect';
import StravaSection from 'components/Strava/Section';
import Athlet from 'components/Strava/Athlet';
import Athlets from 'components/Strava/Athlets';

import { makeSelectKoms, makeSelectAthlets, makeSelectLoading, makeSelectError, makeSelectAthletId } from './selectors';
import { loadKoms, changeAthletId, loadAthlets } from './actions';
import Segments from '../../components/Strava/Segments/index';
import reducer from './reducer';
import saga from './saga';


export class StravaPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (typeof this.props.loadKoms === 'function') {
      this.props.loadAthlets();
    }
    if (typeof this.props.loadKoms === 'function') {
      this.props.loadKoms();
    }
  }

  render() {
    const { athlets, koms, athletId } = this.props;
    return (
      <article>
        <div className="page-wrap">
          <Nav index={1} />
          <section id="main">
            <StravaSection className={'strava-banner'} note={'Strava'} action={false} />
            <Athlets athlets={athlets} action={this.props.onChangeAthletId} />
            <Athlet athlet={athlets[athletId]} koms={koms[athletId]} />
            <Segments koms={koms[athletId]} />
          </section>
        </div>
        <footer id="footer">
          <div className="copyright">
            &copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
          </div>
        </footer>
      </article>
    );
  }
}

// We require the use of src and alt, only enforced by react in dev mode
StravaPage.propTypes = {
  loadKoms: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  athlets: PropTypes.object.isRequired,
  onChangeAthletId: PropTypes.func,
  loadAthlets: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  koms: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  athletId: PropTypes.oneOfType([PropTypes.number.isRequired,
    PropTypes.string.isRequired]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAthletId: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(changeAthletId(evt.target.value));
      dispatch(loadKoms());
    },
    loadKoms: dispatch(loadKoms()),
    loadAthlets: dispatch(loadAthlets()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  athlets: makeSelectAthlets(),
  athletId: makeSelectAthletId(),
  koms: makeSelectKoms(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'strava', reducer });
const withSaga = injectSaga({ key: 'strava', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StravaPage);

