import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { IGlobalProviderContextProps } from './GlobalProviderInterface';

const GlobalContext = createContext({} as any);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    const [search, setSearch] = useState<string>();

    const sharedValue = {
        search,
        setSearch
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