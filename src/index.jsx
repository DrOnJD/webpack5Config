import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import App from 'App';

import styles from './index.module.scss';

render(
  <App styles={styles} />,
  document.getElementById('root'),
);
