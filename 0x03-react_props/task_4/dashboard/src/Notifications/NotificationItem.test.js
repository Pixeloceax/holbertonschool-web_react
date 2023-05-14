import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("renders without crashing", () => {
    render(<NotificationItem />);
  });

  it("renders the correct html for default type and value props", () => {
    const { getByTestId } = render(
      <NotificationItem type="default" value="test" />
    );
    expect(getByTestId("notification-item")).toHaveTextContent("test");
    expect(getByTestId("notification-item")).toHaveClass("default");
  });

  it("renders the correct html for html prop", () => {
    const { getByTestId } = render(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(getByTestId("notification-item")).toHaveTextContent("test");
    expect(getByTestId("notification-item")).toContainHTML("<u>test</u>");
  });
});
