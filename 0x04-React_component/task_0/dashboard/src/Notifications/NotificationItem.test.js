import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("renders the correct html for default type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe("test");
    expect(wrapper.hasClass("default")).toBe(true);
  });

  it("renders the correct html for html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.text()).toBe("test");
    expect(wrapper.html()).toContain("<u>test</u>");
  });
});
