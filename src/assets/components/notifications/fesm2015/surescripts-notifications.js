import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { startWith, exhaustMap, switchMap, materialize, dematerialize, finalize, tap } from 'rxjs/operators';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, interval, NEVER } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NotificationsService {
    constructor() { }
}
NotificationsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NotificationsService.ctorParameters = () => [];
/** @nocollapse */ NotificationsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NotificationsService_Factory() { return new NotificationsService(); }, token: NotificationsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SurescriptsNotification {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
        this.postedDate = new Date(init.postedDate);
        /** @type {?} */
        const difference = new Date().getTime() - this.postedDate.getTime();
        if (difference <= 3600000) {
            /** @type {?} */
            const minutes = Math.round(((difference % 86400000) % 3600000) / 60000);
            if (minutes < 2) {
                this.readablePostedDate = 'Moments ago';
            }
            else {
                this.readablePostedDate = `${minutes} minutes ago`;
            }
        }
        else if (difference <= 86400000) {
            /** @type {?} */
            const hours = Math.floor((difference % 86400000) / 3600000);
            if (hours < 2) {
                this.readablePostedDate = `${hours} hour ago`;
            }
            else {
                this.readablePostedDate = `${hours} hours ago`;
            }
        }
        else if (difference <= 604800000) {
            /** @type {?} */
            const days = Math.floor(difference / 86400000);
            if (days < 2) {
                this.readablePostedDate = `${days} day ago`;
            }
            else {
                this.readablePostedDate = `${days} days ago`;
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SurescriptsNotifications {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
        this.items = init.items.map(x => new SurescriptsNotification(x));
    }
}

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
class NotificationsComponent {
    /**
     * @param {?} http
     * @param {?} router
     */
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.faBell = faBell;
        this.unreadCount = 0;
        this.SurescriptsNotificationStatus = SurescriptsNotificationStatus;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ssoBaseUrl) {
            throw new Error('"ssoBaseUrl" is required.');
        }
        this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
        /** @type {?} */
        const pauser = new BehaviorSubject(false);
        /** @type {?} */
        const source = interval(3600000).pipe(startWith(0), exhaustMap(() => this.poll()));
        pauser.pipe(switchMap(paused => paused ? NEVER : source.pipe(materialize())), dematerialize()).subscribe();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // pause the poll and make a call. once finished, turn the poll on again and unsubscribe
                pauser.next(true);
                this.poll().pipe(finalize(() => {
                    pauser.next(false);
                })).subscribe().unsubscribe();
            }
        });
    }
    /**
     * @return {?}
     */
    poll() {
        return this.http.get(`${this.ssoBaseUrl}/app/v1/user/notifications`, { withCredentials: true }).pipe(tap((resp) => {
            this.notifications = new SurescriptsNotifications(resp);
            this.unreadCount = this.notifications.items.filter(x => x.status === SurescriptsNotificationStatus.Unread).length;
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemClicked(item) {
        if (item.status === SurescriptsNotificationStatus.Unread) {
            this.http.put(`${this.ssoBaseUrl}/app/v1/user/notifications/${item.id}/read`, null, { withCredentials: true }).pipe(tap(() => {
                item.status = SurescriptsNotificationStatus.Read;
                this.unreadCount = this.unreadCount - 1;
            })).subscribe();
        }
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    dismiss($event, item) {
        /** @type {?} */
        const index = this.notifications.items.indexOf(item);
        $event.stopPropagation();
        if (index >= 0) {
            this.http.put(`${this.ssoBaseUrl}/app/v1/user/notifications/${item.id}/dismiss`, null, { withCredentials: true }).pipe(tap(() => {
                this.notifications.items.splice(index, 1);
                if (item.status === SurescriptsNotificationStatus.Unread) {
                    this.unreadCount = this.unreadCount - 1;
                }
            })).subscribe();
        }
    }
}
NotificationsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'surescripts-notifications',
                template: "<div class=\"d-inline-block\" ngbDropdown [placement]=\"['bottom', 'bottom-right']\" display=\"dynamic\" autoClose=\"outside\">\r\n    <a ngbDropdownToggle class=\"nav-link\" id=\"surescripts-notifications-icon\" [ngClass]=\"{'new': unreadCount > 0 }\" title=\"{{unreadCount}} unread notifications\" data-toggle=\"dropdown\">\r\n        <fa-icon [icon]=\"faBell\" [fixedWidth]=\"true\" size=\"lg\"></fa-icon>\r\n    </a>\r\n    <div ngbDropdownMenu>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\" id=\"notifications-title\">Notifications ({{unreadCount}})</h5>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item flex-column align-items-start\" *ngIf=\"notifications?.items?.length === 0\">\r\n                    <span>No notifications at this time.</span>\r\n                </li>\r\n                <li class=\"list-group-item flex-column align-items-start\" id=\"{{notification?.id}}\" (click)=\"itemClicked(notification)\" [ngClass]=\"{ 'read': notification?.status === SurescriptsNotificationStatus.Read}\" *ngFor=\"let notification of notifications?.items; index as j;\">\r\n                    <h6 class=\"mb-1 text-truncate\">\r\n                        <a href=\"{{notifications?.baseUrl}}/notifications/{{notification?.id}}\"  id=\"{{notification?.id}}-notification-title\" title=\"View All Notifications\">{{notification.title}}</a>\r\n                    </h6>\r\n                    <p class=\"mb-1 text-truncate\" title=\"{{notification.summary}}\" id=\"{{notification?.id}}-notification-summary\">{{notification.summary}}</p>\r\n                    <span class=\"d-flex w-100 justify-content-between\">\r\n                        <small class=\"text-muted\">{{notification.readablePostedDate || (notification.postedDate | date:'shortDate') }}</small>\r\n                        <small class=\"text-muted\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"dismiss($event, notification)\" id=\"{{notification?.id}}-notification-dismiss\">Dismiss</a>\r\n                        </small>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"card-footer text-center\">\r\n                <a href=\"{{notifications?.baseUrl}}/notifications\" id=\"view-all-notifications\" title=\"View All Notifications\">View All</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}#surescripts-notifications-icon.new{color:#f7901e}li{cursor:pointer;padding:.75rem}li.read{background-color:#f3f3f3}li h6>a,li span>small>a{color:inherit}.dropdown-menu{width:500px;max-height:400px;overflow-x:auto;padding:0}.dropdown-menu .card-title{margin-bottom:0}.dropdown-menu .card-body{padding:.75rem}.dropdown-menu .card-footer{border-top:none;background-color:#fff}"]
            }] }
];
/** @nocollapse */
NotificationsComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: Router }
];
NotificationsComponent.propDecorators = {
    ssoBaseUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NotificationsModule {
}
NotificationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    NgbDropdownModule,
                    FontAwesomeModule
                ],
                declarations: [NotificationsComponent],
                exports: [NotificationsComponent]
            },] }
];

export { NotificationsComponent, NotificationsModule, NotificationsService, SurescriptsNotification, SurescriptsNotificationStatus, SurescriptsNotifications };
//# sourceMappingURL=surescripts-notifications.js.map
