/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsNotifications } from './notifications.model';
import { tap, exhaustMap, startWith, switchMap, finalize, dematerialize, materialize } from 'rxjs/operators';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { SurescriptsNotificationStatus } from './notification-status.enum';
import { interval, BehaviorSubject, NEVER } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
export class NotificationsComponent {
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
if (false) {
    /** @type {?} */
    NotificationsComponent.prototype.faBell;
    /** @type {?} */
    NotificationsComponent.prototype.ssoBaseUrl;
    /** @type {?} */
    NotificationsComponent.prototype.notifications;
    /** @type {?} */
    NotificationsComponent.prototype.unreadCount;
    /** @type {?} */
    NotificationsComponent.prototype.SurescriptsNotificationStatus;
    /** @type {?} */
    NotificationsComponent.prototype.http;
    /** @type {?} */
    NotificationsComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNFLE9BQU8sRUFBYyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBUS9ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBU2pDLFlBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVA1RCxjQUF5QixNQUFNLENBQUM7UUFLaEMsbUJBQWMsQ0FBQyxDQUFDO1FBQ2hCLHFDQUFnQyw2QkFBNkIsQ0FBQztLQUNHOzs7O0lBRWpFLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJ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RSxVQUFVLEVBQUUsSUFBSSxFQUM5RyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssNkJBQTZCLENBQUMsTUFBTSxFQUFFO29CQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QzthQUNGLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2pCO0tBQ0Y7OztZQTVFRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGcrRUFBNkM7O2FBRTlDOzs7O1lBZFEsVUFBVTtZQU9WLE1BQU07Ozt5QkFZWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5tb2RlbCc7XHJcbmltcG9ydCB7IHRhcCwgZXhoYXVzdE1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIGZpbmFsaXplLCBkZW1hdGVyaWFsaXplLCBtYXRlcmlhbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZmFCZWxsLCBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cyB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXN0YXR1cy5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaW50ZXJ2YWwsIEJlaGF2aW9yU3ViamVjdCwgTkVWRVIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzdXJlc2NyaXB0cy1ub3RpZmljYXRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZmFCZWxsOiBJY29uRGVmaW5pdGlvbiA9IGZhQmVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBzc29CYXNlVXJsOiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uczogU3VyZXNjcmlwdHNOb3RpZmljYXRpb25zO1xyXG4gIHVucmVhZENvdW50ID0gMDtcclxuICBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cyA9IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnNzb0Jhc2VVcmwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInNzb0Jhc2VVcmxcIiBpcyByZXF1aXJlZC4nKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3NvQmFzZVVybCA9IHRoaXMuc3NvQmFzZVVybC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcclxuXHJcbiAgICBjb25zdCBwYXVzZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgICAvLyBwb2xsIGV2ZXJ5IGhvdXIuXHJcbiAgICBjb25zdCBzb3VyY2UgPSBpbnRlcnZhbCgzNjAwMDAwKS5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoMCksXHJcbiAgICAgIGV4aGF1c3RNYXAoKCkgPT4gdGhpcy5wb2xsKCkpXHJcbiAgICApO1xyXG5cclxuICAgIHBhdXNlci5waXBlKHN3aXRjaE1hcChcclxuICAgICAgcGF1c2VkID0+IHBhdXNlZCA/IE5FVkVSIDogc291cmNlLnBpcGUobWF0ZXJpYWxpemUoKSlcclxuICAgICksIGRlbWF0ZXJpYWxpemUoKSkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICAvLyBwYXVzZSB0aGUgcG9sbCBhbmQgbWFrZSBhIGNhbGwuIG9uY2UgZmluaXNoZWQsIHR1cm4gdGhlIHBvbGwgb24gYWdhaW4gYW5kIHVuc3Vic2NyaWJlXHJcbiAgICAgICAgcGF1c2VyLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wb2xsKCkucGlwZShmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICBwYXVzZXIubmV4dChmYWxzZSk7XHJcbiAgICAgICAgfSkpLnN1YnNjcmliZSgpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2xsKCk6IE9ic2VydmFibGU8U3VyZXNjcmlwdHNOb3RpZmljYXRpb25zPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnM+KGAke3RoaXMuc3NvQmFzZVVybH0vYXBwL3YxL3VzZXIvbm90aWZpY2F0aW9uc2AsXHJcbiAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS5waXBlKHRhcCgocmVzcDogU3VyZXNjcmlwdHNOb3RpZmljYXRpb25zKSA9PiB7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnMocmVzcCk7XHJcbiAgICAgIHRoaXMudW5yZWFkQ291bnQgPSB0aGlzLm5vdGlmaWNhdGlvbnMuaXRlbXMuZmlsdGVyKHggPT4geC5zdGF0dXMgPT09IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzLlVucmVhZCkubGVuZ3RoO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgaXRlbUNsaWNrZWQoaXRlbTogU3VyZXNjcmlwdHNOb3RpZmljYXRpb24pIHtcclxuICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gU3VyZXNjcmlwdHNOb3RpZmljYXRpb25TdGF0dXMuVW5yZWFkKSB7XHJcbiAgICAgIHRoaXMuaHR0cC5wdXQ8U3VyZXNjcmlwdHNOb3RpZmljYXRpb24+KGAke3RoaXMuc3NvQmFzZVVybH0vYXBwL3YxL3VzZXIvbm90aWZpY2F0aW9ucy8ke2l0ZW0uaWR9L3JlYWRgLCBudWxsLFxyXG4gICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS5waXBlKHRhcCgoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zdGF0dXMgPSBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cy5SZWFkO1xyXG4gICAgICAgIHRoaXMudW5yZWFkQ291bnQgPSB0aGlzLnVucmVhZENvdW50IC0gMTtcclxuICAgICAgfSkpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzbWlzcygkZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubm90aWZpY2F0aW9ucy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5odHRwLnB1dDxTdXJlc2NyaXB0c05vdGlmaWNhdGlvbj4oYCR7dGhpcy5zc29CYXNlVXJsfS9hcHAvdjEvdXNlci9ub3RpZmljYXRpb25zLyR7aXRlbS5pZH0vZGlzbWlzc2AsIG51bGwsXHJcbiAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUodGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzLlVucmVhZCkge1xyXG4gICAgICAgICAgdGhpcy51bnJlYWRDb3VudCA9IHRoaXMudW5yZWFkQ291bnQgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=