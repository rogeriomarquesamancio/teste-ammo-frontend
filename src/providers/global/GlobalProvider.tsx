import { useState, createContext } from 'react';
import { IGlobalProviderContextProps } from './GlobalProviderInterface';
import { ICategoryDTO } from '../../module/api/endpoints/category/Category.interface';

const GlobalContext = createContext({} as any);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    const [search, setSearch] = useState<string>();
    const [productsInfo, setProductsInfo] = useState<any>();
    const [categoryList, setCategoryList] = useState<ICategoryDTO[]>([]);

    const sharedValue = {
        search,
        setSearch,
        productsInfo,
        setProductsInfo,
        categoryList,
        setCategoryList
    };

    return (
        <GlobalContext.Provider value={sharedValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };