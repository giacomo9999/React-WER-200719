import React from "react";
import { shallow } from "enzyme";

import CounterDisplay from "./CounterDisplay";
import { findByTestAttr } from "../../test/testUtils";

test("Renders without error", () => {
  const wrapper = shallow(<CounterDisplay />);
  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.length).toBe(1);
});
