import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';

import routes from 'router';
import store from 'store';


render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {routes.map(
          ({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={(
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Element />
                </Suspense>
              )}
            />
          ),
        )}
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
