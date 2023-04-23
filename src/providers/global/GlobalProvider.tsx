import { useState, createContext } from 'react';

import { IGlobalContext, IGlobalProviderContextProps } from './GlobalProviderInterface';
import { IProductDTO } from '../../module/api/endpoints/product/Product.interface';

const GlobalContext = createContext({} as IGlobalContext);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    const [search, setSearch] = useState<string>();
    const [productsInfo, setProductsInfo] = useState<IProductDTO>();

    const sharedValue: IGlobalContext = {
        search,
        setSearch,
        productsInfo,
        setProductsInfo,
    };

    return (
        <GlobalContext.Provider value={sharedValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };