import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// what a lovely place for some tests...

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
