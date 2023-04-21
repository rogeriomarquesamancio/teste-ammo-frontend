export interface IResponse<T> {
    data?: T,
    error: any,
    svStatus: boolean,
    msg: string
}
