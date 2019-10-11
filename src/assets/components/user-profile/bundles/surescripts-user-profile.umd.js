(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@surescripts/user-profile', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = global || self, factory((global.surescripts = global.surescripts || {}, global.surescripts['user-profile'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common, global['@ng-bootstrap/ng-bootstrap']));
}(this, function (exports, core, http, operators, common, ngBootstrap) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SurescriptsUserProfile = /** @class */ (function () {
        function SurescriptsUserProfile(init) {
            Object.assign(this, init);
        }
        return SurescriptsUserProfile;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UserProfileComponent = /** @class */ (function () {
        function UserProfileComponent(http) {
            this.http = http;
            this.isStaging = false;
            this.isProduction = false;
        }
        /**
         * @return {?}
         */
        UserProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.logoutUrl = this.logoutUrl || 'logout';
            if (!this.ssoBaseUrl) {
                throw new Error('"ssoBaseUrl" is required.');
            }
            this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
            this.http.get(this.ssoBaseUrl + "/app/v1/user/profile", { withCredentials: true }).pipe(operators.tap(function (resp) {
                _this.environment = resp.environment && resp.environment.toLocaleUpperCase();
                _this.isStaging = _this.environment === 'STAGING';
                _this.isProduction = _this.environment === 'PRODUCTION';
                _this.profile = new SurescriptsUserProfile(resp);
            })).subscribe();
        };
        UserProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'surescripts-user-profile',
                        template: "<span *ngIf=\"environment && !isProduction\" class=\"environment-identifier navbar-text pr-2\" [ngClass]=\"{'staging': isStaging}\" title=\"Current Environment: {{environment}}\">{{environment}}</span>\r\n<div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\" *ngIf=\"profile?.user\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">{{profile?.user?.lastName}}, {{profile?.user?.firstName}}</a>\r\n  <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" id=\"userprofile-profile-link\" href=\"{{profile?.baseUrl}}/profile\">View Profile</a>\r\n      <a class=\"dropdown-item\" id=\"userprofile-logout-link\" href=\"{{logoutUrl}}\">Logout</a>\r\n  </div>\r\n</div>",
                        styles: [".dropdown-toggle{cursor:pointer}.environment-identifier{font-weight:700;letter-spacing:.05em;text-transform:uppercase}.environment-identifier.staging{color:#f7901e}"]
                    }] }
        ];
        /** @nocollapse */
        UserProfileComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        UserProfileComponent.propDecorators = {
            logoutUrl: [{ type: core.Input }],
            ssoBaseUrl: [{ type: core.Input }]
        };
        return UserProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SurescriptsUser = /** @class */ (function () {
        function SurescriptsUser(init) {
            Object.assign(this, init);
        }
        return SurescriptsUser;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UserProfileModule = /** @class */ (function () {
        function UserProfileModule() {
        }
        UserProfileModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            ngBootstrap.NgbDropdownModule
                        ],
                        declarations: [UserProfileComponent],
                        exports: [UserProfileComponent]
                    },] }
        ];
        return UserProfileModule;
    }());

    exports.SurescriptsUser = SurescriptsUser;
    exports.SurescriptsUserProfile = SurescriptsUserProfile;
    exports.UserProfileComponent = UserProfileComponent;
    exports.UserProfileModule = UserProfileModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=surescripts-user-profile.umd.js.map
