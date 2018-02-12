import React from 'react';

import { shallow } from 'enzyme';
import {
  HeaderItem,
  __RewireAPI__ as RewireApi,
} from './HeaderItem';

describe('HeaderItem', () => {
  test('HeaderItem should render properly', () => {
    const wrapper = shallow(
      <HeaderItem
        id={ 'name' }
        itemKey={ 'name' }
        setSort={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('HeaderItem should render properly when column === itemKey', () => {
    const wrapper = shallow(
      <HeaderItem
        column={ 'name' }
        id={ 'name' }
        itemKey={ 'name' }
        setSort={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('HeaderItem should render properly when column === itemKey and isAscending === true', () => {
    const wrapper = shallow(
      <HeaderItem
        column={ 'name' }
        id={ 'name' }
        isAscending={ true }
        itemKey={ 'name' }
        setSort={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});