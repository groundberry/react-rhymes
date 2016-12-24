import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rhymes = {
  'La nutria come pescado...': '... y atraviesa el río a nado.',
  'Ruge estático el león...': '... feroz, aunque mayestático.',
  'Más que a muchos señorones...': '... gusta un libro a los ratones.',
  'Presume cuando va llena...': '... del surtidor la ballena.'
};

ReactDOM.render(
  <App rhymes={rhymes} />,
  document.getElementById('root')
);
