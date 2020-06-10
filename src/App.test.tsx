import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App component tests:', () => {
  test('it renders the title', () => {
    expect(wrapper.find('#title').text()).toBe(
      "It's beginning to look a lot like Quizzmas"
    );
  });
});
