export class AppSettings {
    public static isProd = false ;
    public static HOST = AppSettings.isProd ? "" : "127.0.0.1";
    public static API_ENDPOINT_MOCK = 'http://'+AppSettings.HOST+':3000/mock/';
    public static API_ENDPOINT = 'http://'+AppSettings.HOST+':3000/api/';
    public static API_ENDPOINT_INVENTORY = 'http://'+AppSettings.HOST+':3001/mock/';
    public static API_ENDPOINT2 = 'http://'+AppSettings.HOST+':3001/api/';
    public static PORT = "4200";
    public static PROTOCOL = "http";

}
