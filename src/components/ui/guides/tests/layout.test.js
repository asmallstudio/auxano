// TO RUN
// `galen test layout.test.js --htmlreport reports`

var devices = {
  smallMobile: {
    deviceName: "smallMobile",
    tags: ["smallMobile", "all"],
    size: "300x1000"
  },
  mobile: {
    deviceName: "mobile",
    tags: ["mobile", "all"],
    size: "576x1000"
  },
  smallTablet: {
    deviceName: "smallTablet",
    tags: ["smallTablet", "all"],
    size: "768x1000"
  },
  tablet: {
    deviceName: "tablet",
    tags: ["tablet", "all"],
    size: "992x1000"
  },
  desktop: {
    deviceName: "desktop",
    tags: ["desktop", "all"],
    size: "1440x1000"
  }
};

beforeTest(function() {
  const driver = createDriver("http://localhost:3000", "1024x768");
  session.put("driver", driver);
});

forAll(devices, function() {
  test("Home page on ${deviceName}", function(device) {
    const driver = session.get("driver");
    resize(driver, device.size);
    checkLayout(driver, "layout.gspec", device.tags);
  });
});

afterTest(function() {
  const driver = session.get("driver");

  driver.quit();
});
