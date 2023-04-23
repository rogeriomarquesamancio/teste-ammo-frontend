export interface IInputSearchProductViewProps {
    handleSubmit:  Function
    inputValue: string
    filteredList: ITypeSearch[]
    onSearch: Function
}

export interface ITypeSearch {
    value: string
}
