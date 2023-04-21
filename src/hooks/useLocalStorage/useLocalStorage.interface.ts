export interface IUseLocalStorageActions<T> {
    value: T,
    setValue: (value: T) => void
    remove: () => void
}