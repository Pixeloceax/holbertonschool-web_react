import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import BodySection from "../BodySection/BodySection.js";
import WithLogging from "../HOC/WithLogging.js";
import { StyleSheet, css } from "aphrodite";

const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: null,
    };
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false,
    });
  }

  ctrlHEventHandler(e) {
    let k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  handleKeyPressDown() {
    document.addEventListener("keydown", this.ctrlHEventHandler, false);
  }

  componentDidMount() {
    this.handleKeyPressDown();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.ctrlHEventHandler, false);
  }

  logOut() {
    this.setState({
      user: null,
    });
  }

  render() {
    let { isLoggedIn } = this.props;
    let { displayDrawer, user } = this.state;

    let i = 0;

    let listNotifications = [
      {
        id: i++,
        type: "default",
        value: "New course available",
      },
      {
        id: i++,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: i++,
        type: "urgent",
        html: { __html: getLatestNotification() },
      },
    ];

    let listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.upperside)}>
              <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
              />
              <Header />
            </div>
            {isLoggedIn === false && (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            {isLoggedIn === true && (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Labore ut consequat esse nostrud aute exercitation occaecat
                consequat ad cillum enim et est ex. Qui proident veniam in aute
                magna occaecat. Esse duis proident aliqua proident eu magna
                aliqua est exercitation. Cupidatat ex eiusmod et commodo laborum
                veniam deserunt ad est excepteur cillum laborum.
              </p>
            </BodySection>
            <Footer />
          </div>
        </Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    position: "relative",
    minHeight: "100vh",
  },
  upperside: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    borderBottom: `3px solid var(--holberton-red)`,
    justifyContent: "space-between",
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
