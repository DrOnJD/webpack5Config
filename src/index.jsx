import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'normalize.css';

import routes from 'router';
import store from 'store';


render(
  <Provider store={store}>
    <BrowserRouter>
      <Link to="/app">App</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        {routes.map(
          ({ path, component }) => <Route key={path} path={path} component={component} />,
        )}
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
