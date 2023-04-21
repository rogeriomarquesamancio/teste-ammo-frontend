export interface IUseArrayActions<T> {
    value: T[],
    setValue: (value: T[]) => void,
    push: (value: T) => void,
    unshift: (value: T) => void,
    filter: (callback: (e: T) => boolean) => void,
    findById: (id: string | number, idLabel?: string) => any,
    update: (index: number, newElement: T) => void,
    updateById: (id: string | number, newElement: T, idLabel?: string) => void,
    remove: (index: number) => void,
    removeById: (id: string | number, idLabel?: string) => void,
    clear: () => void,
    length: number
}