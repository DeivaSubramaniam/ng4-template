import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailService } from './services/email.service';

export const config = {
    apiKey: "AIzaSyCIXbaG6B8THGyg-m8pI0Azb_HkCUHIZqM",
    authDomain: "ng4-template.firebaseapp.com",
    databaseURL: "https://ng4-template.firebaseio.com",
    storageBucket: "ng4-template.appspot.com",
    messagingSenderId: "89390605958"
};

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [MODULE_COMPONENTS]
    , providers: [UserService, EmailService]
})

export class DashboardModule { }
