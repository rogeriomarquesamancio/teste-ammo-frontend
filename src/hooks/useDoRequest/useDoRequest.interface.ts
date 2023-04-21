export interface IUseDoRequestActions<input, output> {
    loading: boolean,
    doRequest: (data: input) => Promise<output>,
}