import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

declare var firebase: any;

@Injectable()
export class UserService {

    userApiUrl = 'https://us-central1-ng4-template.cloudfunctions.net/users';

    constructor(private http: Http) { }

    // getUsers() {
    //     console.log(firebase);
    //     // return firebase.database().list('/users');
    //     return [
    //         {
    //             phone: 'asdasd',
    //             address: 'asdasd',
    //             email: 'asdasd'
    //         }
    //     ];
    // }

    getUsers() {
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        const options = new RequestOptions({ headers: headers});

        return this.http
            .get(this.userApiUrl, options)
            .map(res => res.json());
    }
}