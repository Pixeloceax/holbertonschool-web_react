describe("getFullYear", () => {
  it("returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe("getFooterCopy", () => {
  it("returns the correct string when passed true", () => {
    const isIndexPage = true;
    expect(getFooterCopy(isIndexPage)).toEqual("© 2023 All tests reserved.");
  });

  it("returns the correct string when passed false", () => {
    const isIndexPage = false;
    expect(getFooterCopy(isIndexPage)).toEqual(
      "Contact us at test@website.com"
    );
  });
});

describe("getLatestNotification", () => {
  it("returns a non-empty string", () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).not.toEqual("");
  });
});
