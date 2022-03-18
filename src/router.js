import { lazy } from 'react';


export default [
  { path: '/', element: lazy(() => import('components/App')), name: 'Приложение' },
  { path: '/user', element: lazy(() => import('components/User')), name: 'Пользователь' },
  { path: '/user/:id', element: lazy(() => import('components/User')), name: 'Пользователь' },
];
