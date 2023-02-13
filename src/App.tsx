import { useRoutes } from 'react-router-dom';
// import { lazy } from 'react';
// const Home = lazy(() => import('@/views/Home'));
// const Demo = lazy(() => import('@/views/Demo'));

import Home from '@/views/Home';
import Demo from '@/views/Demo';
import Store from '@/views/StoreDemo';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: 'demo', element: <Demo /> },
    { path: 'store', element: <Store /> },
  ]);

  return element;
}

export default App;
