webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(130);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        // $.getScript('../assets/js/light-bootstrap-dashboard.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path === titlee) {
            return true;
        }
        else {
            return false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(199)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'dashboard-cmp',
        template: __webpack_require__(200)
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routes__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(73);
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var config = {
    apiKey: "AIzaSyCIXbaG6B8THGyg-m8pI0Azb_HkCUHIZqM",
    authDomain: "ng4-template.firebaseapp.com",
    databaseURL: "https://ng4-template.firebaseio.com",
    storageBucket: "ng4-template.appspot.com",
    messagingSenderId: "89390605958"
};
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__dashboard_routes__["a" /* MODULE_ROUTES */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_routes__["b" /* MODULE_COMPONENTS */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7_angularfire2__["b" /* AngularFire */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_table_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typography_typography_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_maps_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upgrade_upgrade_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_table_user_table_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_COMPONENTS; });









var MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_3__table_table_component__["a" /* TableComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_5__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_6__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_7__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: 'user-table', component: __WEBPACK_IMPORTED_MODULE_8__user_table_user_table_component__["a" /* UserTableComponent */] }
];
var MODULE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */],
    __WEBPACK_IMPORTED_MODULE_3__table_table_component__["a" /* TableComponent */],
    __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__["a" /* IconsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__typography_typography_component__["a" /* TypographyComponent */],
    __WEBPACK_IMPORTED_MODULE_6__maps_maps_component__["a" /* MapsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__upgrade_upgrade_component__["a" /* UpgradeComponent */],
    __WEBPACK_IMPORTED_MODULE_8__user_table_user_table_component__["a" /* UserTableComponent */]
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import initDemo = require('../../../assets/js/charts.js');
// import initNotify = require('../../../assets/js/notify.js');
// declare var $:any;
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        // $.getScript('../../../assets/js/light-bootstrap-dashboard.js');
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        // initDemo();
        // initNotify();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'home-cmp',
        template: __webpack_require__(201),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardemail', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out')
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('carduser', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0.25s ease-out')
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('card2014sales', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0.5s ease-out')
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardtasks', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0.75s ease-out')
                ])
            ])
        ]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'icons-cmp',
        template: __webpack_require__(202),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardicons', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out')
                ])
            ])
        ]
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'maps-cmp',
        template: __webpack_require__(203),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('maps', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('1s 0s ease-out')
                ])
            ])
        ]
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'notifications-cmp',
        template: __webpack_require__(204),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardnotifications', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out')
                ])
            ])
        ]
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent(af) {
        this.af = af;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.users = this.af.database.list('/users', {
            query: {
                orderByKey: true,
                limitToFirst: 10,
                startAt: '1'
            }
        });
        //console.log(this.users);
        console.log(this.users);
        this.users.subscribe(function () {
            console.log("done???");
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'table-cmp',
        template: __webpack_require__(205),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardtable1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out')
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardtable2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                        opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0.25s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], TableComponent);

var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'typography-cmp',
        template: __webpack_require__(206),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardtypography', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 1,
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                    }))
                ])
            ])
        ]
    })
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'upgrade-cmp',
        template: __webpack_require__(207),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardupgrade', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out')
                ])
            ])
        ]
    })
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserTableComponent = (function () {
    function UserTableComponent(userService) {
        this.userService = userService;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (val) { return _this.users = val; });
    };
    return UserTableComponent;
}());
UserTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'user-table',
        template: __webpack_require__(208)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserTableComponent);

var _a;
//# sourceMappingURL=user-table.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'user-cmp',
        template: __webpack_require__(209),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('carduserprofile', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0s ease-out'),
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('cardprofile', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* style */])({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('0.3s 0.25s ease-out')
                ])
            ])
        ]
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__(210)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location) {
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__["a" /* MenuType */].BRAND; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__(211)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__["a" /* MenuType */].BRAND; });
    };
    Object.defineProperty(SidebarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? '☰' : '✖';
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.getMenuItemClasses = function (menuItem) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__["a" /* MenuType */].RIGHT
        };
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__(212),
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <dashboard-cmp></dashboard-cmp>\n        <!--<div *ngIf!=\"isMaps('/maps')\">-->\n        <footer-cmp></footer-cmp>\n        <!--</div>-->\n    </div>\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card\" [@cardemail]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Email Statistics</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\n                        <div class=\"footer\">\n                            <div class=\"legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Bounce\n                                <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-clock-o\"></i> Campaign sent 2 days ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"card\" [@carduser]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Users Behavior</h4>\n                        <p class=\"category\">24 Hours performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartHours\" class=\"ct-chart\"></div>\n                        <div class=\"footer\">\n                            <div class=\"legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Click\n                                <i class=\"fa fa-circle text-warning\"></i> Click Second Time\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\" [@card2014sales]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">2014 Sales</h4>\n                        <p class=\"category\">All products including Taxes</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\n                        <div class=\"footer\">\n                            <div class=\"legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Tesla Model S\n                                <i class=\"fa fa-circle text-danger\"></i> BMW 5 Series\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-check\"></i> Data information certified\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\" [@cardtasks]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Tasks</h4>\n                        <p class=\"category\">Backend development</p>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"table-full-width\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\">\n                                            </label>\n                                        </td>\n                                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\" checked=\"\">\n                                            </label>\n                                        </td>\n                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\" checked=\"\">\n                                            </label>\n                                        </td>\n                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                            rain swept through metro Detroit\n                                        </td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\">\n                                            </label>\n                                        </td>\n                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\">\n                                            </label>\n                                        </td>\n                                        <td>Read \"Following makes Medium better\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\" value=\"\" data-toggle=\"checkbox\">\n                                            </label>\n                                        </td>\n                                        <td>Unfollow 5 enemies from twitter</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"footer\">\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" [@cardicons]>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">202 Awesome Stroke Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"http://themes-pixeden.com/font-demos/7-stroke/index.html\">Pixeden</a></p>\n                    </div>\n                    <div class=\"content all-icons\">\n                        <div class=\"row\">\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-album\"></i>\n                                    <input type=\"text\" value=\"pe-7s-album\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-arc\"></i>\n                                    <input type=\"text\" value=\"pe-7s-arc\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bandaid\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bandaid\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-car\"></i>\n                                    <input type=\"text\" value=\"pe-7s-car\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diamond\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diamond\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-door-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-door-lock\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-eyedropper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-eyedropper\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-female\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gym\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gym\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hammer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hammer\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-headphones\"></i>\n                                    <input type=\"text\" value=\"pe-7s-headphones\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-helm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-helm\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hourglass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hourglass\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-leaf\"></i>\n                                    <input type=\"text\" value=\"pe-7s-leaf\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magic-wand\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magic-wand\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-male\"></i>\n                                    <input type=\"text\" value=\"pe-7s-male\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint-bucket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint-bucket\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pendrive\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pendrive\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-piggy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-piggy\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plugin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plugin\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-rocket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-rocket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-settings\"></i>\n                                    <input type=\"text\" value=\"pe-7s-settings\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shield\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shield\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-smile\"></i>\n                                    <input type=\"text\" value=\"pe-7s-smile\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-usb\"></i>\n                                    <input type=\"text\" value=\"pe-7s-usb\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-vector\"></i>\n                                    <input type=\"text\" value=\"pe-7s-vector\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wine\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wine\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bluetooth\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bluetooth\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-way\"></i>\n                                    <input type=\"text\" value=\"pe-7s-way\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-id\"></i>\n                                    <input type=\"text\" value=\"pe-7s-id\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wristwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wristwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-world\"></i>\n                                    <input type=\"text\" value=\"pe-7s-world\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-users\"></i>\n                                    <input type=\"text\" value=\"pe-7s-users\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user-female\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-up-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-up-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-switch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-switch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-scissors\"></i>\n                                    <input type=\"text\" value=\"pe-7s-scissors\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wallet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wallet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-safe\"></i>\n                                    <input type=\"text\" value=\"pe-7s-safe\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-voicemail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-voicemail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-video\"></i>\n                                    <input type=\"text\" value=\"pe-7s-video\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-unlock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-unlock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-umbrella\"></i>\n                                    <input type=\"text\" value=\"pe-7s-umbrella\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-trash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-trash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-tools\"></i>\n                                    <input type=\"text\" value=\"pe-7s-tools\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-timer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-timer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ticket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ticket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-target\"></i>\n                                    <input type=\"text\" value=\"pe-7s-target\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-sun\"></i>\n                                    <input type=\"text\" value=\"pe-7s-sun\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-study\"></i>\n                                    <input type=\"text\" value=\"pe-7s-study\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-stopwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-stopwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-star\"></i>\n                                    <input type=\"text\" value=\"pe-7s-star\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-speaker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-speaker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-signal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-signal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shuffle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shuffle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shopbag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shopbag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-share\"></i>\n                                    <input type=\"text\" value=\"pe-7s-share\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-server\"></i>\n                                    <input type=\"text\" value=\"pe-7s-server\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-search\"></i>\n                                    <input type=\"text\" value=\"pe-7s-search\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-film\"></i>\n                                    <input type=\"text\" value=\"pe-7s-film\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-science\"></i>\n                                    <input type=\"text\" value=\"pe-7s-science\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-disk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-disk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ribbon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ribbon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-repeat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-repeat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-add-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-add-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paperclip\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paperclip\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-radio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-radio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-print\"></i>\n                                    <input type=\"text\" value=\"pe-7s-print\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-network\"></i>\n                                    <input type=\"text\" value=\"pe-7s-network\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-prev\"></i>\n                                    <input type=\"text\" value=\"pe-7s-prev\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mute\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mute\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-power\"></i>\n                                    <input type=\"text\" value=\"pe-7s-power\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-medal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-medal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-portfolio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-portfolio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plus\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plus\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-left-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-left-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-play\"></i>\n                                    <input type=\"text\" value=\"pe-7s-play\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-key\"></i>\n                                    <input type=\"text\" value=\"pe-7s-key\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-joy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-joy\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo-gallery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo-gallery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pin\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-phone\"></i>\n                                    <input type=\"text\" value=\"pe-7s-phone\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plug\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plug\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pen\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pen\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-right-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-right-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paper-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paper-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-delete-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-delete-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bottom-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bottom-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-notebook\"></i>\n                                    <input type=\"text\" value=\"pe-7s-notebook\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-news-paper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-news-paper\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-musiclist\"></i>\n                                    <input type=\"text\" value=\"pe-7s-musiclist\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-music\"></i>\n                                    <input type=\"text\" value=\"pe-7s-music\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mouse\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mouse\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-more\"></i>\n                                    <input type=\"text\" value=\"pe-7s-more\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-moon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-moon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-monitor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-monitor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-micro\"></i>\n                                    <input type=\"text\" value=\"pe-7s-micro\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-menu\"></i>\n                                    <input type=\"text\" value=\"pe-7s-menu\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-marker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-marker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magnet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magnet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-loop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-loop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-look\"></i>\n                                    <input type=\"text\" value=\"pe-7s-look\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lintern\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lintern\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-link\"></i>\n                                    <input type=\"text\" value=\"pe-7s-link\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-light\"></i>\n                                    <input type=\"text\" value=\"pe-7s-light\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-less\"></i>\n                                    <input type=\"text\" value=\"pe-7s-less\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-keypad\"></i>\n                                    <input type=\"text\" value=\"pe-7s-keypad\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-junk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-junk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-info\"></i>\n                                    <input type=\"text\" value=\"pe-7s-info\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-home\"></i>\n                                    <input type=\"text\" value=\"pe-7s-home\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph3\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph3\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-global\"></i>\n                                    <input type=\"text\" value=\"pe-7s-global\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gleam\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gleam\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-glasses\"></i>\n                                    <input type=\"text\" value=\"pe-7s-glasses\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gift\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gift\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-folder\"></i>\n                                    <input type=\"text\" value=\"pe-7s-folder\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-flag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-flag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-filter\"></i>\n                                    <input type=\"text\" value=\"pe-7s-filter\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-expand1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-expand1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-exapnd2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-exapnd2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-edit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-edit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drawer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drawer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diskette\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diskette\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-date\"></i>\n                                    <input type=\"text\" value=\"pe-7s-date\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cup\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cup\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-culture\"></i>\n                                    <input type=\"text\" value=\"pe-7s-culture\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-crop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-crop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-credit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-credit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-copy-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-copy-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-config\"></i>\n                                    <input type=\"text\" value=\"pe-7s-config\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-compass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-compass\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-comment\"></i>\n                                    <input type=\"text\" value=\"pe-7s-comment\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-coffee\"></i>\n                                    <input type=\"text\" value=\"pe-7s-coffee\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-clock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-clock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-check\"></i>\n                                    <input type=\"text\" value=\"pe-7s-check\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-chat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-chat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cart\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cart\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-camera\"></i>\n                                    <input type=\"text\" value=\"pe-7s-camera\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-call\"></i>\n                                    <input type=\"text\" value=\"pe-7s-call\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-calculator\"></i>\n                                    <input type=\"text\" value=\"pe-7s-calculator\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-browser\"></i>\n                                    <input type=\"text\" value=\"pe-7s-browser\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bookmarks\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bookmarks\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bicycle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bicycle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bell\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bell\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-battery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-battery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ball\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ball\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-attention\"></i>\n                                    <input type=\"text\" value=\"pe-7s-attention\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-anchor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-anchor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-albums\"></i>\n                                    <input type=\"text\" value=\"pe-7s-albums\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-alarm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-alarm\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-airplay\"></i>\n                                    <input type=\"text\" value=\"pe-7s-airplay\">\n                                </div>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" [@maps]></div>\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"card\" [@cardnotifications]>\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\" [@cardtable1]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Striped Table with Hover</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover table-striped\">\n                            <thead>\n                                <tr>\n                                    <th>Firstname</th>\n                                    <th>Lastname</th>\n                                    <th>Email</th>\n                                    <th>Address</th>\n                                    <th>Phone</th>\n                                </tr>\n                                <tbody id='users'>\n                                    <tr *ngFor=\"let user of users | async\">\n                                        <td>{{user['first-name']}}</td>\n                                        <td>{{user['last-name']}}</td>\n                                        <td>{{user.email}}</td>\n                                        <td>{{user.address}}</td>\n                                        <td>{{user.phone}}</td>\n                                    </tr>\n                                </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\" [@cardtable2]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Salary</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Doris Greene</td>\n                                    <td>$63,542</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>Mason Porter</td>\n                                    <td>$78,615</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\" [@cardtypography]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Light Bootstrap Table Heading</h4>\n                        <p class=\"category\">Created using Roboto Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Light Bootstrap Table Heading </h1>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Light Bootstrap Table Heading</h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Light Bootstrap Table Heading</h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Light Bootstrap Table Heading</h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Light Bootstrap Table Heading</h5>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Light Bootstrap Table Heading</h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                                </p>\n                                <small>\n                                    Steve Jobs, CEO Apple\n                                </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                            there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                            -->\n                            <p class=\"category\">Coloured Text\n                            </p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\" [@cardupgrade]>\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">LBD PRO Angular 2</h4>\n                        <p class=\"category\">Looking for more components? Please check our Premium Version of Light Bootstrap Dashboard.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-center\">Free</th>\n                                    <th class=\"text-center\">PRO</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>115+</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>14+</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>22+</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td>\n                                        <i class=\"fa fa-times text-danger\"></i>\n                                    </td>\n                                    <td>\n                                        <i class=\"fa fa-check text-success\"></i>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "\r\n<table>\r\n    <thead>\r\n        <th>Id</th>\r\n        <th>Firstname</th>\r\n        <th>Lastname</th>\r\n        <th>Address</th>\r\n        <th>Email</th>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let user of users\">\r\n            <td>{{ user.address }}</td>\r\n            <td>{{ user.email }}</td>\r\n            <td>{{ user.phone }}</td>\r\n            <td>{{ user.address }}</td>\r\n            <td>{{ user.address }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\" [@carduserprofile]>\n                    <div class=\"header\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Company (disabled)</label>\n                                        <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>First Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Address</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>City</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Postal Code</label>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\" [@cardprofile]>\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                <h4 class=\"title\">Mike Andrew<br />\n                                    <small>michael24</small>\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                            Your chick she so thirsty <br>\n                            I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\" >{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-dashboard\"></i>\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-globe\"></i>\n                        <b class=\"caret\"></b>\n                        <span class=\"notification hidden-sm hidden-xs\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            5 Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-search\"></i>\n                        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        <p>Account</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p>\n                            Dropdown\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <p>Log out</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "    <div class=\"sidebar-wrapper\">\n        <div class=\"logo\">\n            <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n                <div class=\"logo-img\">\n                    <img src=\"/assets/img/angular2-logo-white.png\"/>\n                </div>\n                Creative Tim\n            </a>\n        </div>\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[0].path]\">\n                    <i class=\"{{menuItems[0].icon}}\"></i>\n                    <p>{{menuItems[0].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[1].path]\">\n                    <i class=\"{{menuItems[1].icon}}\"></i>\n                    <p>{{menuItems[1].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[2].path]\">\n                    <i class=\"{{menuItems[2].icon}}\"></i>\n                    <p>{{menuItems[2].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[3].path]\">\n                    <i class=\"{{menuItems[3].icon}}\"></i>\n                    <p>{{menuItems[3].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[4].path]\">\n                    <i class=\"{{menuItems[4].icon}}\"></i>\n                    <p>{{menuItems[4].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[5].path]\">\n                    <i class=\"{{menuItems[5].icon}}\"></i>\n                    <p>{{menuItems[5].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[6].path]\">\n                    <i class=\"{{menuItems[6].icon}}\"></i>\n                    <p>{{menuItems[6].title}}</p>\n                </a>\n            </li>\n            <li class=\"active active-pro\">\n                <a  [routerLink]=\"[menuItems[7].path]\">\n                    <i class=\"{{menuItems[7].icon}}\"></i>\n                    <p>{{menuItems[7].title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuType; });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType || (MenuType = {}));
//# sourceMappingURL=sidebar.metadata.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userApiUrl = 'https://us-central1-ng4-template.cloudfunctions.net/users';
    }
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
    UserService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.userApiUrl, options)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'User profile', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-user' },
    { path: 'table', title: 'Table List', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-map-marker' },
    { path: 'notifications', title: 'Notifications', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-bell' },
    { path: 'upgrade', title: 'Upgrade to PRO', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-rocket' }
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.bundle.js.map