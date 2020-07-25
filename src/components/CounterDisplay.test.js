import React from "react";
import { shallow, mount } from "enzyme";

import CounterDisplay from "./CounterDisplay";
import { findByTestAttr } from "../../test/testUtils";
import counterDisplay from "./CounterDisplay";

const defaultProps = { counterValue: -999 };

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = mount(<CounterDisplay {...setupProps} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test("Renders without error", () => {
  const display = findByTestAttr(setup(), "counter-display");
  expect(display.length).toBe(1);
});

test("Correctly displays passed-in counter value", () => {
  const counterDisp = setup().find("h1");
  expect(counterDisp.text()).toBe("-999");
});
