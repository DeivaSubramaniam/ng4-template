import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Observable';

@Injectable()
export class AuthService {
    loginUrl: string;
    credentials: any;
    public user: any;

    constructor(private http: Http) { 
        this.loginUrl = 'https://us-central1-ng4-template.cloudfunctions.net/login';
    }

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
                console.log(res);

                if (res.success) {
                    this.user = res.content;
                }
            })
            .catch(err => console.error(err));
    }

    isLogged() {

        console.log(this.user);
        return this.user != null && this.user != undefined;
    }
}