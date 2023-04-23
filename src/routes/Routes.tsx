import { useRoutes, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts';
import { Home, Search } from '../pages';

// Rotas do projeto
function Routes() {
    const routes = useRoutes([
        {
            element: <MainLayout />,
            children: [{ path: '/', element: <Home /> }],
        },
        {
            element: <MainLayout />,
            children: [{ path: '/search', element: <Search />, }],
        },
        {
            element: <MainLayout />,
            children: [{ path: '/search?product=:strfilter', element: <Search />, }],
        },
        { path: '/', element: <Navigate to='/' /> },
        { path: '*', element: <Navigate to='/' /> },
    ]);

    return routes;
}

export default Routes;
