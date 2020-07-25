import React from "react";
import { shallow, mount } from "enzyme";

import CounterResults from "./CounterResults";
import { findByTestAttr } from "../../test/testUtils";

const defaultProps = { results: [1, 2, 3, 4, 5] };

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = mount(<CounterResults {...setupProps} />);
  if (state) {
    wrapper.setState({ ...state });
  }
  return wrapper;
};

test("Renders without error", () => {
  const results = findByTestAttr(setup(), "counter-results");
  expect(results.length).toBe(1);
});

test("Displays list of results based on passed-in array", () => {
  const resultList = setup().find("ul li");
  expect(resultList.length).toBe(5);
});
