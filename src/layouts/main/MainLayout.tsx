import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader, MainFooter } from './components';
import './MainLayout.css';

function MainLayout() {
    return (
        <React.Fragment>
            <header> {/* Header */}
                <MainHeader />
            </header>
            <main> {/* Conteudo principal / main */}
                <Outlet />
            </main>
            <footer>  {/* Footer */}
                <MainFooter />
            </footer>
        </React.Fragment>
    )
}

export default MainLayout;