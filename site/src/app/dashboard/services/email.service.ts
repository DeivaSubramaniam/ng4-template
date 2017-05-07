import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmailService {

    constructor(private http: Http) { }

    sendEmailFuncUrl = 'https://us-central1-ng4-template.cloudfunctions.net/sendEmail';

    sendEmail(to: string, subject: string, message: string, callback: any, errorCallback: any) {
        const parameters = {
            to: to,
            subject: subject,
            message: message
        };
        console.log('sendEmail 1');
        this.http
            .post(this.sendEmailFuncUrl, parameters)
            .map(res => res.json())
            .subscribe(val => {
                if (val.success) {
                    if (callback)
                        callback();
                } else {
                    if (errorCallback)
                        errorCallback();
                }
            });
    }
}