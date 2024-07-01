import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/iResponse';
import { environment } from '../../../environments';
import { NotifierService } from 'angular-notifier';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        private http: HttpClient,
        private notifier: NotifierService
    ) { }

    get initData() {
        // return (<any>window).Telegram?.WebApp?.initData
        return 'query_id=AAH4VnQcAAAAAPhWdBwIlUAv&user=%7B%22id%22%3A477386488%2C%22first_name%22%3A%22%D0%A0%D0%BE%D0%B4%D0%B8%D0%BE%D0%BD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Karrikatura%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719814197&hash=5e738d1a10edddc4997328ede9238bb306e5b51264592518019c3803445c17fa'
    }

    private expired_at?: Date 
    private accessToken: string = ''

    async getAccessToken() {
        let t = this;

        if (!t.expired_at || t.expired_at <= new Date()) {
            return t.http.request(
                "POST",
                apiUrl + "auth/telegram",
                {
                    body: { 
                        initData: t.initData 
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).toPromise()
                .then((response:any) => {
                    let exp = new Date()
                    exp.setSeconds(exp.getSeconds() + response.data.expiresIn)
                    t.expired_at = exp
                    t.accessToken = response.data.accessToken
                    return t.accessToken
                })
                .catch(er => {
                    t.notifier.notify('error', er)
                    return t.accessToken
                });
        }
        else {
            return t.accessToken
        }
    }
        

    public getAnonym<T>(url: string) {
        return this.http.get<IResponse<T>>(apiUrl + url).toPromise();
    }

    public get<T>(url: string) {
        return this.getAuthorizationHeaders()
        .then(headers => {
            return this.http.get<IResponse<T>>(apiUrl + url, { headers }).toPromise();
        })
    }

    public postAnonym<T>(url: string, body: any) {
        return this.http.post<IResponse<T>>(apiUrl + url, body, { headers: this.getPublicHeaders() }).toPromise();
    }

    public post<T>(url: string, body: any){
        return this.getAuthorizationHeaders()
        .then(headers => {
            return this.http.post<IResponse<T>>(apiUrl + url, body, { headers }).toPromise();
        })
    }

    private getPublicHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }

    private async getAuthorizationHeaders() {
        return {
            Authorization: `Bearer ${await this.getAccessToken()}`,
            'Content-Type': 'application/json',
        };
    }
}
