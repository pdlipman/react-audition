import React from 'react';
import Immutable from 'immutable';

import { shallow } from 'enzyme';
import { ClassSubject } from './ClassSubject';

const students = Immutable.fromJS([
  {
    name: 'Joe Smith',
    grade: '70%',
  },
  {
    name: 'Jane Doe',
    grade: '80%',
  }
]).toSeq();

const columns = Immutable.fromJS([
  {
    key: 'name',
    label: 'Student Name',
    className: 'LeftItem',
  },
  {
    key: 'grade',
    label: 'Average Grade',
    className: 'RightItem',
  },
]);

describe('ClassSubject', () => {
  test('ClassSubject should render properly', () => {
    const wrapper = shallow(
      <ClassSubject
        students={ students }
        columns={ columns }
        getStudents={ () => {
        } }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});