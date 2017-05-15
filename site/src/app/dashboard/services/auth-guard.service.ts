import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        const logged = this.authService.isLogged();

        console.log('logged: ' + logged)

        if(!logged)
            this.router.navigate(['/notifications']);

        return logged;
    }
}