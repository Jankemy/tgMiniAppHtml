import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/iResponse';
import { environment } from '../../../environments/environment';
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
        return (<any>window).Telegram?.WebApp?.initData
    }

    private expired_at?: Date 
    private accessToken: string = ''

    async getAccessToken() {
        let t = this;

        if (!t.expired_at || t.expired_at <= new Date()) {
            return t.http.request(
                "POST",
                apiUrl + "/auth/telegram",
                {
                    body: {
                        mode: "raw",
                        raw: JSON.stringify({ initData: t.initData })
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
