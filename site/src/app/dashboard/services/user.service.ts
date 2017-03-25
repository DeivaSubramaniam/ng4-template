import { Injectable } from '@angular/core';

declare var firebase:any;

@Injectable()
export class UserService {

    constructor() { }

    getUsers() {
        console.log(firebase);
        // return firebase.database().list('/users');
        return [
            {
                phone: 'asdasd',
                address: 'asdasd',
                email: 'asdasd'
            }
        ];
    }
}