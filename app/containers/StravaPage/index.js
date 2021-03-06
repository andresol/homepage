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

import { makeSelectKoms, makeSelectAthlets, makeSelectLoading, makeSelectError, makeSelectAthletId,
  makeSelectStats } from './selectors';
import { loadKoms, changeAthletId, loadAthlets, loadAthletStats } from './actions';
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
    if (typeof this.props.loadAthletStats === 'function') {
      this.props.loadAthletStats();
    }
  }

  render() {
    const { athlets, koms, stats, athletId } = this.props;
    return (
      <article>
        <div className="page-wrap">
          <Nav index={1} />
          <section id="main">
            <StravaSection className={'strava-banner'} note={'Strava'} action={false} />
            <Athlets athlets={athlets} action={this.props.onChangeAthletId} />
            <Athlet athlet={athlets[athletId]} koms={koms[athletId]} stats={stats[athletId]} />
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

StravaPage.propTypes = {
  loadKoms: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  athlets: PropTypes.object.isRequired,
  onChangeAthletId: PropTypes.func,
  loadAthlets: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  loadAthletStats: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  koms: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  stats: PropTypes.oneOfType([
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
      dispatch(loadAthletStats());
    },
    loadKoms: dispatch(loadKoms()),
    loadAthlets: dispatch(loadAthlets()),
    loadAthletStats: dispatch(loadAthletStats()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  athlets: makeSelectAthlets(),
  athletId: makeSelectAthletId(),
  koms: makeSelectKoms(),
  stats: makeSelectStats(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'strava', reducer });
const withSaga = injectSaga({ key: 'strava', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StravaPage);

