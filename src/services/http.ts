import axios, { AxiosInstance } from "axios"


class http {

    private instance!: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'localhost:8080/api', //dummy url
            validateStatus: (status) => {
                return status >= 200 && status < 400;
            }
        });
        this.instance.interceptors.response.use((response) => {
            return Promise.resolve(response.data);
        });
    }

    get<Type>(url: string, params?: {}): Promise<Type> {

        return this.instance.get(url, { params })
    }
}

export default new http()