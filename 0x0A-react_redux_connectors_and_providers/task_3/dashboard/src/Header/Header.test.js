import { shallow } from "enzyme";
import React from "react";
import { Header } from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

const USER = { email: "johndoe", password: "123456" };

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders img", () => {
    const wrapper = shallow(<Header user={USER} />);
    expect(wrapper.find("div img")).toHaveLength(1);
  });

  it("renders h1", () => {
    const wrapper = shallow(<Header user={USER} />);
    expect(wrapper.find("div h1")).toHaveLength(1);
  });

  it("mounts the Header component with a default context value. The logoutSection is not created", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("mounts the Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created", () => {
    const wrapper = shallow(<Header user={USER} />);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });
});
