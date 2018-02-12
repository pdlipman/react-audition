import React from 'react';
import Immutable from 'immutable';

import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard';

const classes = Immutable.fromJS({
  Math: {
    label: 'Math',
    id: 'Math',
  },
});

describe('Dashboard', () => {
  test('Dashboard should render properly', () => {
    const wrapper = shallow(
      <Dashboard
        classes={ classes }
        getStudents={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Dashboard should render with error properly', () => {
    const wrapper = shallow(
      <Dashboard
        classes={ classes }
        error={ 'Test Error Message'}
        getStudents={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});