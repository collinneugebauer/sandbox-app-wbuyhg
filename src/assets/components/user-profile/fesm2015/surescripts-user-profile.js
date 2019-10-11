import { Component, Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SurescriptsUserProfile {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UserProfileComponent {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.isStaging = false;
        this.isProduction = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logoutUrl = this.logoutUrl || 'logout';
        if (!this.ssoBaseUrl) {
            throw new Error('"ssoBaseUrl" is required.');
        }
        this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
        this.http.get(`${this.ssoBaseUrl}/app/v1/user/profile`, { withCredentials: true }).pipe(tap(resp => {
            this.environment = resp.environment && resp.environment.toLocaleUpperCase();
            this.isStaging = this.environment === 'STAGING';
            this.isProduction = this.environment === 'PRODUCTION';
            this.profile = new SurescriptsUserProfile(resp);
        })).subscribe();
    }
}
UserProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'surescripts-user-profile',
                template: "<span *ngIf=\"environment && !isProduction\" class=\"environment-identifier navbar-text pr-2\" [ngClass]=\"{'staging': isStaging}\" title=\"Current Environment: {{environment}}\">{{environment}}</span>\r\n<div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\" *ngIf=\"profile?.user\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">{{profile?.user?.lastName}}, {{profile?.user?.firstName}}</a>\r\n  <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" id=\"userprofile-profile-link\" href=\"{{profile?.baseUrl}}/profile\">View Profile</a>\r\n      <a class=\"dropdown-item\" id=\"userprofile-logout-link\" href=\"{{logoutUrl}}\">Logout</a>\r\n  </div>\r\n</div>",
                styles: [".dropdown-toggle{cursor:pointer}.environment-identifier{font-weight:700;letter-spacing:.05em;text-transform:uppercase}.environment-identifier.staging{color:#f7901e}"]
            }] }
];
/** @nocollapse */
UserProfileComponent.ctorParameters = () => [
    { type: HttpClient }
];
UserProfileComponent.propDecorators = {
    logoutUrl: [{ type: Input }],
    ssoBaseUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SurescriptsUser {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UserProfileModule {
}
UserProfileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    NgbDropdownModule
                ],
                declarations: [UserProfileComponent],
                exports: [UserProfileComponent]
            },] }
];

export { SurescriptsUser, SurescriptsUserProfile, UserProfileComponent, UserProfileModule };
//# sourceMappingURL=surescripts-user-profile.js.map
