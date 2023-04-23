import { useState, createContext } from 'react';

import { IGlobalContext, IGlobalProviderContextProps } from './GlobalProviderInterface';

const GlobalContext = createContext({} as IGlobalContext);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    // Váriaveis salvas no context
    const [searchText, setSearchText] = useState<string>();
    
    const sharedValue: IGlobalContext = {
        searchText,
        setSearchText,
    };

    return (
        <GlobalContext.Provider value={sharedValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };