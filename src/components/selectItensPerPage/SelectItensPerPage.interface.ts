export interface ISelectItensPerPageViewInterface {
    onChange: () => void,
    itensPerPage: number,
    optionsList?: IOptionsList[]
}

export interface IOptionsList {
    value: number,
    label: string
}