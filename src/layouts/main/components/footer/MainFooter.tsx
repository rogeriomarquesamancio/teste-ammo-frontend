import React from 'react';
import { ContainerFooter, StyledText } from './MainFooter.style';

function MainFooter() {

    function DevBy() {
        return (
            <StyledText>
                {'Desenvolvido por '}
                <span>
                    {'Rogério Marques '}
                </span>
                {`@ ${new Date().getFullYear()}.`}
            </StyledText>
        );
    }

    return (
        <React.Fragment>
            <ContainerFooter>
                <DevBy />
            </ContainerFooter>
        </React.Fragment>
    )
}
export default MainFooter;
