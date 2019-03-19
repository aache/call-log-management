export class AppSettings {
    public static API_ENDPOINT_MOCK = 'http://127.0.0.1:3000/mock/';
    public static API_ENDPOINT = 'http://127.0.0.1:3000/api/';
    public static API_ENDPOINT_INVENTORY = 'http://127.0.0.1:3001/mock/';
    public static API_ENDPOINT2 = 'http://127.0.0.1:3001/api/';
    public static HOST = "localhost";
    public static PORT = "4200";
    public static PROTOCOL = "http";

    public static call_priority_map = {
        1 : "High",
        2 : "Medium"
    }
}
