import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { IGlobalProviderContextProps } from './GlobalProviderInterface';

const GlobalContext = createContext({} as any);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    const [exemple, setExemple] = useState<any>();

    const sharedValue = {
        exemple,
        setExemple
    };

    return (
        <GlobalContext.Provider value={sharedValue}>
            {children}
        </GlobalContext.Provider>
    )
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { GlobalProvider, GlobalContext };