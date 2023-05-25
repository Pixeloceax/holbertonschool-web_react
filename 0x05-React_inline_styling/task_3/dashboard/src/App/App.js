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

const styles = StyleSheet.create({
  app: {
    textAlign: "center",
    display: "flex",
  },
  body: {
    maxWidth: "90%",
    margin: "0 auto",
  },
  div: {
    padding: "2px 8px",
  },
  appContainer: {
    position: "relative",
    minHeight: "100vh",
  },
  upperside: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    borderBottom: "3px solid #e1484c",
    justifyContent: "space-between",
  },
  login: {
    padding: "0 24px 0 0",
    color: "#e1484c",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
  }

  ctrlHEventHandler(e) {
    let k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
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

  render() {
    let { isLoggedIn } = this.props;

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
      <Fragment>
        <div className={css(styles.appContainer)}>
          <div className={css(styles.upperside)}>
            <Notifications listNotifications={listNotifications} />
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
          <BodySection
            title="News from the school"
            className={css(styles.body)}
          >
            <p>
              Ipsum anim sunt qui ullamco do consequat reprehenderit aliqua
              fugiat proident amet duis.
            </p>
          </BodySection>
          <Footer className={css(styles.div)} />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
