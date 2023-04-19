import React from 'react';
import { ContainerFooter } from './MainFooter.style';

function MainFooter() {
    function Copyright() {
        return (
            <div>
                {'Copyright © '}
                {'Your Website '}
                {new Date().getFullYear()}
                {'.'}
            </div>
        );
    }

    return (
        <ContainerFooter>
            <Copyright />
        </ContainerFooter>
    )
}

export default MainFooter;
