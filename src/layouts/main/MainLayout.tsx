import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainHeader, MainFooter } from './components';

function MainLayout() {
    return (
        <React.Fragment>
            <header>
                <MainHeader />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <MainFooter />
            </footer>
        </React.Fragment>
    )
}

export default MainLayout;