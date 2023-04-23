export interface ISearchPaginationViewInterface {
    onChange: () => void,
    itensPerPage?: number,
    totalItens?: number,
    currentPage?: number,
    titleValue?: string,
}