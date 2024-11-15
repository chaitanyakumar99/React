import React from 'react';
import ReactDOM from 'react-dom';
import RandomColorPicker from './ReactComponent';

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

ReactDOM.render(
  <RandomColorPicker colors={colors} />,
  document.getElementById('root')
);
