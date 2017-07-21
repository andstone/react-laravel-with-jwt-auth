'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ContactWidget from './ContactWidget';

export const init = (config) => {
  ReactDOM.render(<ContactWidget config={config} />, document.getElementById('mount'));
}

