import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const rhymes = {
    a: 'a',
    b: 'b'
  };
  ReactDOM.render(
    <App rhymes={rhymes}/>,
    document.createElement('div')
  );
});
