import { useRoutes, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts';

import {
    Home,
} from '../pages';

function Routes() {
    const routes = useRoutes([
        {
            element: <MainLayout />,
            children: [{ path: '/', element: <Home />}],
        },
        {
            element: <MainLayout />,
            children: [{ path: '/search', element: <Home />, }],
        },
        {
            element: <MainLayout />,
            children: [{ path: '/search?product=:strfilter', element: <Home />, }],
        },
        { path: '/', element: <Navigate to='/' /> },
        { path: '*', element: <Navigate to='/' /> },
    ]);

    return routes;
}

export default Routes;
