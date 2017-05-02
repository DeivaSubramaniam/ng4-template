import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-table',
    templateUrl: 'user-table.component.html'
})
export class UserTableComponent implements OnInit {
    users: any;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService
            .getUsers()
            .subscribe(val => this.users = val);
    }
}