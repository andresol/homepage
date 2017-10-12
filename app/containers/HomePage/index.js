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
import React from 'react';
import { UntappdImg } from 'components/Img';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
  }


  render() {
    return (
      <article>
        <div className="page-wrap">
          <nav id="nav">
            <ul>
              <li><a href="index.html" className="active"><span className="icon fa-home"></span></a></li>
              <li><a href="gallery.html"><span className="icon fa-camera-retro"></span></a></li>
              <li><a href="generic.html"><span className="icon fa-file-text-o"></span></a></li>
            </ul>
          </nav>

          <section id="main">

            <section id="banner">
              <div className="inner">
                <h1>Sollie&apos;s web</h1>
                <p></p>
                <ul className="actions">
                  <li><a href="#galleries" className="button alt scrolly big">Continue</a></li>
                </ul>
              </div>
            </section>

            <section id="galleries">

              <div className="gallery">
                <header className="special">
                  <h2>Whats happening</h2>
                </header>
                <div className="content">
                  <div className="media">
                    <a href="strava"><img src="thumbs_strava.jpg" alt="" title="Strava" /></a>
                  </div>
                  <div className="media">
                    <a href="images/fulls/05.jpg"><img src="thumbs_02.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="images/fulls/09.jpg"><img src="thumbs_05.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="images/fulls/02.jpg"><img src="thumbs_06.jpg" alt="" title="This right here is a caption." /></a>
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

              <div className="column">
              </div>

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


export function mapDispatchToProps() {
  return {};
}

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
