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

import { makeSelectAthlet, makeSelectLoading, makeSelectError } from './selectors';
import { loadAthlet } from './actions';
import Segments from '../../components/Strava/Segments/index';
import reducer from './reducer';
import saga from './saga';


export class StravaPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (typeof this.props.loadAthlet === 'function') {
      this.props.loadAthlet();
    }
  }

  render() {
    const { athlet } = this.props;
    return (
      <article>
        <div className="page-wrap">
          <Nav index={1} />
          <section id="main">
            <StravaSection note={'Strava'} action={false} />
            <Athlets list={[{ name: 'Andre Sollie', id: '131220' }]} />
            <Athlet />
            <Segments list={athlet} />
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
  loadAthlet: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  athlet: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadQuote: dispatch(loadAthlet()),
  };
}

const mapStateToProps = createStructuredSelector({
  quote: makeSelectAthlet(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'strava', reducer });
const withSaga = injectSaga({ key: 'strava', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StravaPage);

