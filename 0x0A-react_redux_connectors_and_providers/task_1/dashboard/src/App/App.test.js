import React from "react";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { mapStateToProps } from "./App";
import { fromJS } from "immutable";

configure({ adapter: new Adapter() });

describe("Testing the <App /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });

  it("<App /> contains the <Notifications /> Component", () => {
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });

  it("<App /> contains the <Header /> Component", () => {
    expect(wrapper.contains(<Header />)).to.equal(true);
  });

  it("<App /> contains the <Footer /> Component", () => {
    expect(wrapper.contains(<Footer />)).to.equal(true);
  });

  it("<App /> doesn't contain <CourseList />", () => {
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
  });
});

describe("Testing the <App /> when isLoggedIn is true", () => {
  let props = {
    isLoggedIn: true,
  };

  let component = shallow(<App {...props} />);

  it("<App /> doesn't contain <Login />", () => {
    expect(component.contains(<Login />)).to.equal(false);
  });

  it("<App /> contains <CourseList />", () => {
    expect(component.find(CourseList)).to.have.lengthOf(1);
  });
});

describe("logOut alerts with correct string", () => {
  const myLogOut = jest.fn(() => undefined);
  const appComp = mount(<App logOut={myLogOut} />);
  const log = jest.spyOn(console, "log");

  it("calls logOut prop when component is mounted", () => {
    expect(appComp.props().logOut).to.equal(myLogOut);
  });

  it("logs the correct string", () => {
    expect(log).to.be.calledWith("Welcome User");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
