import React from "react";
import { shallow } from "enzyme";

import CounterButton from "./CounterButton";
import { findByTestAttr } from "../../test/testUtils";

const defaultProps={}

test("Renders without error", () => {
  const wrapper = shallow(<CounterButton />);
  const button = findByTestAttr(wrapper, "counter-button");
  expect(button.length).toBe(1);
});
