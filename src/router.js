import { lazy } from 'react';


export default [
  { path: '/app', component: lazy(() => import('components/App')), name: 'Приложение' },
  { path: '/about', component: lazy(() => import('components/About')), name: 'О нас' },
];
