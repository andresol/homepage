/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import StravaIcon from 'components/StravaIcon';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectQuote, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import { UntappdImg } from 'components/Img';
import { createStructuredSelector } from 'reselect';
import { loadQuote } from '../App/actions';

import reducer from './reducer';
import saga from './saga';
import Quote from '../../components/Quote/index';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (typeof this.props.loadQuote === 'function') {
      this.props.loadQuote();
    }
  }

  render() {
    const { quote } = this.props;
    return (
      <article>
        <div className="page-wrap">
          <nav id="nav">
            <ul>
              <li><a href="/" className="active"><span className="icon fa-home"></span></a></li>
              <li><a href="/strava"><span className="icon fa-bicycle"></span></a></li>
            </ul>
          </nav>

          <section id="main">

            <section id="banner">
              <div className="inner">
                <h1>Sollie&apos;s web</h1>
                <p></p>
                <ul className="actions">
                  <li><a href="#links" className="button alt scrolly big">Continue</a></li>
                </ul>
              </div>
            </section>

            <section id="links">
              <div className="gallery">
                <header className="special">
                  <h2>Cool stuff</h2>
                </header>
                <div className="content">
                  <div className="media">
                    <a href="strava"><img src="thumbs_strava.jpg" alt="" title="Strava." /></a>
                  </div>
                  <div className="media">
                    <a href="/"><img src="thumbs_weather.png" alt="" title="Weather." /></a>
                  </div>
                  <div className="media">
                    <a href="/"><img src="thumbs_code.jpg" alt="" title="Coding." /></a>
                  </div>
                  <div className="media">
                    <a href="/"><img src="thumbs_home.jpg" alt="" title="Home." /></a>
                  </div>
                </div>
                <footer>
                  <a href="gallery.html" className="button big">Full Gallery</a>
                </footer>
              </div>
            </section>

            <section id="contact">
              <div className="social column">
                <h3>About Me</h3>
                <p>A house in Ekeberg, a java web developer trying new stuff.</p>
                <p>React, java, nodejs, varnish, nginx...beer...cycling</p>
                <h3>Follow Me</h3>
                <ul className="icons">
                  <li><a href="https://untappd.com/user/andresol" className="icon"><UntappdImg src="untappd.png" alt="Untappd" /></a></li>
                  <li><a href="https://www.facebook.com/andresoll" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><StravaIcon to="https://www.strava.com/athletes/131220" src="strava.ico" /></li>
                </ul>
              </div>

              <Quote quote={quote.text} person={quote.person} />
            </section>

            <footer id="footer">
              <div className="copyright">
                &copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
              </div>
            </footer>
          </section>
        </div>
      </article>
    );
  }
}

// We require the use of src and alt, only enforced by react in dev mode
HomePage.propTypes = {
  loadQuote: PropTypes.oneOfType([PropTypes.func,
    PropTypes.object]),
  quote: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadQuote: dispatch(loadQuote()),
  };
}

const mapStateToProps = createStructuredSelector({
  quote: makeSelectQuote(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
