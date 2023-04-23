
export interface IGlobalProviderContextProps {
    children: JSX.Element
};

export interface IGlobalContext {
    searchText?: string,
    setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>,
};