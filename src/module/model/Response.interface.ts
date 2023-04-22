export interface IResponse<T> {
    data?: T,
    status: boolean,
    msg: string
}
