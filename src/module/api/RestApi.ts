export default class RestApi {

    static getUrl(): string {
       /*  switch (process.env.REACT_APP_ENVIRONMENT) {
            case 'local':
                return 'https://localhost:44390';
            case 'dev':
                return 'dev';
            case 'homol':
                return 'homol'; */
          /*   case 'prod': */
                return 'https://ammo-varejo-api.onrender.com';
       /*      default:
                throw new Error(`Error message`);
        } */
    }

    public static URL = this.getUrl();
    public static TOKEN = "";

    public static async httpMethod(method: string, url: string, body?: any) {
        return fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.TOKEN
            },
            body: JSON.stringify(body)
        });
    }

    public static httpGet = (url: string) => this.httpMethod("GET", url).then((res) => res.json());
    public static httpPost = (url: string, body: any) => this.httpMethod("POST", url, body).then((res) => res.json());
    public static httpPut = (url: string, body: any) => this.httpMethod("PUT", url, body).then((res) => res.json());
    public static httpDelete = (url: string) => this.httpMethod("DELETE", url).then((res) => res.json());

    public static setToken = (token: string | null) => this.TOKEN = `Bearer ${token}`;
}
