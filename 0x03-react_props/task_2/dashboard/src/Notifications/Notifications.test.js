import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders three NotificationItems", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });

  it("renders the correct HTML in the first NotificationItem", () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    const expectedHtml =
      "<div><strong>Urgent:</strong> New course available</div>";
    expect(firstItem.html()).toEqual(expectedHtml);
  });
});
