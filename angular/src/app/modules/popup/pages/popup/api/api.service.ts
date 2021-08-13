import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const LOCAL = true;

const HOST = LOCAL ? 'localhost:8080' : '';
const PROTOCOL = LOCAL ? 'http' : 'https'

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    host() {
        return HOST;
    }

    apiUrl() {
        return `${PROTOCOL}://${this.host()}/api/`;
    }


    post(path, data) {
        return this.httpClient.post<any>(`${this.apiUrl()}${path}`, data);
    }

    get(path) {
        return this.httpClient.get<any>(`${this.apiUrl()}${path}`);
    }
}
