import { lazy } from 'react';


export default [
  { path: '/', element: lazy(() => import('components/App')), name: 'Приложение' },
  { path: '/about', element: lazy(() => import('components/About')), name: 'О нас' },
];
