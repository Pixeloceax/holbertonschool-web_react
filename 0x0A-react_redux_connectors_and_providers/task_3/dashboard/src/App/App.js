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
import { connect } from "react-redux";
import {
  hideNotificationDrawer,
  displayNotificationDrawer,
  logout,
  loginRequest,
  login,
} from "../actions/uiActionCreators.js";

const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: null,
      listNotifications: [
        {
          id: 0,
          type: "default",
          value: "New course available",
        },
        {
          id: 1,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 2,
          type: "urgent",
          html: { __html: getLatestNotification() },
        },
      ],
    };
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  ctrlHEventHandler(e) {
    let k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logout();
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

  logout() {
    this.setState({
      user: null,
    });
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  render() {
    let {
      isLoggedIn,
      displayDrawer,
      hideNotificationDrawer,
      displayNotificationDrawer,
    } = this.props;
    let { user, listNotifications } = this.state;

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
      <AppContext.Provider value={{ user, logout: this.logout }}>
        <Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.upperside)}>
              <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={displayNotificationDrawer}
                handleHideDrawer={hideNotificationDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
              />
              <Header />
            </div>
            {isLoggedIn === false && (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login login={login} />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  hideNotificationDrawer: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  logout: PropTypes.func,
  login: PropTypes.func,
};

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

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logout,
  login: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
