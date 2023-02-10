import { useRoutes } from 'react-router-dom';
// import { lazy } from 'react';
// const Home = lazy(() => import('@/views/Home'));
// const Demo = lazy(() => import('@/views/Demo'));

import Home from '@/views/Home';
import Demo from '@/views/Demo';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: 'demo', element: <Demo /> },
  ]);

  return element;
}

export default App;
