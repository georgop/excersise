import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface ApiResponse<T> {
    data: T;
    status: number;
}

export class HttpService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    public async get<T>(url: string): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get(url);
            return {
                data: response.data,
                status: response.status,
            };
        } catch (error) {
            throw error;
        }
    }
}
