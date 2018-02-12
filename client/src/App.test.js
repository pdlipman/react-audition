import React from 'react';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const testState = Immutable.fromJS({});

describe('App', () => {
  test('App should render properly', () => {
    const store = mockStore(testState);
    const wrapper = shallow(
      <App store={ store }/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
