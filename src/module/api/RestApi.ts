export default class RestApi {
    
    // URL de conexão da API
    static getUrl(): string {
        return 'https://ammo-varejo-api.onrender.com';
    }

    public static URL = this.getUrl();
    public static TOKEN = "";

    public static async httpMethod(method: string, url: string, body?: any) {
        return fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    }

    public static httpGet = (url: string) => this.httpMethod("GET", url).then((res) => res.json());
    public static httpPost = (url: string, body: any) => this.httpMethod("POST", url, body).then((res) => res.json());
    public static httpPut = (url: string, body: any) => this.httpMethod("PUT", url, body).then((res) => res.json());
    public static httpDelete = (url: string) => this.httpMethod("DELETE", url).then((res) => res.json());
}
