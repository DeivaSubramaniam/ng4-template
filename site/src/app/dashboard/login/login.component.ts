import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

    login(user: any){
        console.log('login' + user);
        this.authService.login(user.user, user.pass);
        
    }
}