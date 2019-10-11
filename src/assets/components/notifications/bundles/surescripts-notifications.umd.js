(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@fortawesome/free-solid-svg-icons'), require('rxjs'), require('@angular/router'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@surescripts/notifications', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@fortawesome/free-solid-svg-icons', 'rxjs', '@angular/router', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.surescripts = global.surescripts || {}, global.surescripts.notifications = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global['@fortawesome/free-solid-svg-icons'], global.rxjs, global.ng.router, global.ng.common, global['@ng-bootstrap/ng-bootstrap'], global['@fortawesome/angular-fontawesome']));
}(this, function (exports, core, http, operators, freeSolidSvgIcons, rxjs, router, common, ngBootstrap, angularFontawesome) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotificationsService = /** @class */ (function () {
        function NotificationsService() {
        }
        NotificationsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NotificationsService.ctorParameters = function () { return []; };
        /** @nocollapse */ NotificationsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NotificationsService_Factory() { return new NotificationsService(); }, token: NotificationsService, providedIn: "root" });
        return NotificationsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SurescriptsNotification = /** @class */ (function () {
        function SurescriptsNotification(init) {
            Object.assign(this, init);
            this.postedDate = new Date(init.postedDate);
            /** @type {?} */
            var difference = new Date().getTime() - this.postedDate.getTime();
            if (difference <= 3600000) {
                /** @type {?} */
                var minutes = Math.round(((difference % 86400000) % 3600000) / 60000);
                if (minutes < 2) {
                    this.readablePostedDate = 'Moments ago';
                }
                else {
                    this.readablePostedDate = minutes + " minutes ago";
                }
            }
            else if (difference <= 86400000) {
                /** @type {?} */
                var hours = Math.floor((difference % 86400000) / 3600000);
                if (hours < 2) {
                    this.readablePostedDate = hours + " hour ago";
                }
                else {
                    this.readablePostedDate = hours + " hours ago";
                }
            }
            else if (difference <= 604800000) {
                /** @type {?} */
                var days = Math.floor(difference / 86400000);
                if (days < 2) {
                    this.readablePostedDate = days + " day ago";
                }
                else {
                    this.readablePostedDate = days + " days ago";
                }
            }
        }
        return SurescriptsNotification;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SurescriptsNotifications = /** @class */ (function () {
        function SurescriptsNotifications(init) {
            Object.assign(this, init);
            this.items = init.items.map(function (x) { return new SurescriptsNotification(x); });
        }
        return SurescriptsNotifications;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SurescriptsNotificationStatus = {
        Read: 'Read',
        Unread: 'Unread',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotificationsComponent = /** @class */ (function () {
        function NotificationsComponent(http, router) {
            this.http = http;
            this.router = router;
            this.faBell = freeSolidSvgIcons.faBell;
            this.unreadCount = 0;
            this.SurescriptsNotificationStatus = SurescriptsNotificationStatus;
        }
        /**
         * @return {?}
         */
        NotificationsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.ssoBaseUrl) {
                throw new Error('"ssoBaseUrl" is required.');
            }
            this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
            /** @type {?} */
            var pauser = new rxjs.BehaviorSubject(false);
            /** @type {?} */
            var source = rxjs.interval(3600000).pipe(operators.startWith(0), operators.exhaustMap(function () { return _this.poll(); }));
            pauser.pipe(operators.switchMap(function (paused) { return paused ? rxjs.NEVER : source.pipe(operators.materialize()); }), operators.dematerialize()).subscribe();
            this.router.events.subscribe(function (event) {
                if (event instanceof router.NavigationEnd) {
                    // pause the poll and make a call. once finished, turn the poll on again and unsubscribe
                    pauser.next(true);
                    _this.poll().pipe(operators.finalize(function () {
                        pauser.next(false);
                    })).subscribe().unsubscribe();
                }
            });
        };
        /**
         * @return {?}
         */
        NotificationsComponent.prototype.poll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.http.get(this.ssoBaseUrl + "/app/v1/user/notifications", { withCredentials: true }).pipe(operators.tap(function (resp) {
                _this.notifications = new SurescriptsNotifications(resp);
                _this.unreadCount = _this.notifications.items.filter(function (x) { return x.status === SurescriptsNotificationStatus.Unread; }).length;
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NotificationsComponent.prototype.itemClicked = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            if (item.status === SurescriptsNotificationStatus.Unread) {
                this.http.put(this.ssoBaseUrl + "/app/v1/user/notifications/" + item.id + "/read", null, { withCredentials: true }).pipe(operators.tap(function () {
                    item.status = SurescriptsNotificationStatus.Read;
                    _this.unreadCount = _this.unreadCount - 1;
                })).subscribe();
            }
        };
        /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        NotificationsComponent.prototype.dismiss = /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        function ($event, item) {
            var _this = this;
            /** @type {?} */
            var index = this.notifications.items.indexOf(item);
            $event.stopPropagation();
            if (index >= 0) {
                this.http.put(this.ssoBaseUrl + "/app/v1/user/notifications/" + item.id + "/dismiss", null, { withCredentials: true }).pipe(operators.tap(function () {
                    _this.notifications.items.splice(index, 1);
                    if (item.status === SurescriptsNotificationStatus.Unread) {
                        _this.unreadCount = _this.unreadCount - 1;
                    }
                })).subscribe();
            }
        };
        NotificationsComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'surescripts-notifications',
                        template: "<div class=\"d-inline-block\" ngbDropdown [placement]=\"['bottom', 'bottom-right']\" display=\"dynamic\" autoClose=\"outside\">\r\n    <a ngbDropdownToggle class=\"nav-link\" id=\"surescripts-notifications-icon\" [ngClass]=\"{'new': unreadCount > 0 }\" title=\"{{unreadCount}} unread notifications\" data-toggle=\"dropdown\">\r\n        <fa-icon [icon]=\"faBell\" [fixedWidth]=\"true\" size=\"lg\"></fa-icon>\r\n    </a>\r\n    <div ngbDropdownMenu>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\" id=\"notifications-title\">Notifications ({{unreadCount}})</h5>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item flex-column align-items-start\" *ngIf=\"notifications?.items?.length === 0\">\r\n                    <span>No notifications at this time.</span>\r\n                </li>\r\n                <li class=\"list-group-item flex-column align-items-start\" id=\"{{notification?.id}}\" (click)=\"itemClicked(notification)\" [ngClass]=\"{ 'read': notification?.status === SurescriptsNotificationStatus.Read}\" *ngFor=\"let notification of notifications?.items; index as j;\">\r\n                    <h6 class=\"mb-1 text-truncate\">\r\n                        <a href=\"{{notifications?.baseUrl}}/notifications/{{notification?.id}}\"  id=\"{{notification?.id}}-notification-title\" title=\"View All Notifications\">{{notification.title}}</a>\r\n                    </h6>\r\n                    <p class=\"mb-1 text-truncate\" title=\"{{notification.summary}}\" id=\"{{notification?.id}}-notification-summary\">{{notification.summary}}</p>\r\n                    <span class=\"d-flex w-100 justify-content-between\">\r\n                        <small class=\"text-muted\">{{notification.readablePostedDate || (notification.postedDate | date:'shortDate') }}</small>\r\n                        <small class=\"text-muted\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"dismiss($event, notification)\" id=\"{{notification?.id}}-notification-dismiss\">Dismiss</a>\r\n                        </small>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"card-footer text-center\">\r\n                <a href=\"{{notifications?.baseUrl}}/notifications\" id=\"view-all-notifications\" title=\"View All Notifications\">View All</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>",
                        styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}#surescripts-notifications-icon.new{color:#f7901e}li{cursor:pointer;padding:.75rem}li.read{background-color:#f3f3f3}li h6>a,li span>small>a{color:inherit}.dropdown-menu{width:500px;max-height:400px;overflow-x:auto;padding:0}.dropdown-menu .card-title{margin-bottom:0}.dropdown-menu .card-body{padding:.75rem}.dropdown-menu .card-footer{border-top:none;background-color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        NotificationsComponent.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: router.Router }
        ]; };
        NotificationsComponent.propDecorators = {
            ssoBaseUrl: [{ type: core.Input }]
        };
        return NotificationsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotificationsModule = /** @class */ (function () {
        function NotificationsModule() {
        }
        NotificationsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            ngBootstrap.NgbDropdownModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        declarations: [NotificationsComponent],
                        exports: [NotificationsComponent]
                    },] }
        ];
        return NotificationsModule;
    }());

    exports.NotificationsComponent = NotificationsComponent;
    exports.NotificationsModule = NotificationsModule;
    exports.NotificationsService = NotificationsService;
    exports.SurescriptsNotification = SurescriptsNotification;
    exports.SurescriptsNotificationStatus = SurescriptsNotificationStatus;
    exports.SurescriptsNotifications = SurescriptsNotifications;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=surescripts-notifications.umd.js.map
