import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

test("Renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
