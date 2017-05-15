import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { MenuType } from './sidebar.metadata';
import { AuthService } from '../dashboard/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    
    isCollapsed = true;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);

    }
    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }
    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }

    isLoggedIn() : boolean
    {
        return this.authService.isLogged();
    }
}
