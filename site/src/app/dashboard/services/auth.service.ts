import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    loginUrl: 'https://us-central1-ng4-template.cloudfunctions.net/login';
    credentials: any;
    user: any;

    constructor(private http: Http) { }

    login(userName: string, password: string) {
        const parameters = {
            userName: userName,
            password: password
        };
        return this.http
            .post(this.loginUrl, parameters)
            .toPromise()
            .then(response => {
                var res = response.json();

                if (res.success) {
                    this.user = res.content;
                }
            });
    }

    isLogged() {
        return this.user != null && this.user != undefined;
    }
}