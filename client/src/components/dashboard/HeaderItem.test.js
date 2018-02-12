import React from 'react';

import { shallow } from 'enzyme';
import { HeaderItem } from './HeaderItem';

describe('HeaderItem', () => {
  test('HeaderItem should render properly', () => {
    const wrapper = shallow(
      <HeaderItem
        id={ 'math' }
        itemKey={ 'math' }
        setSort={ () => {} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});