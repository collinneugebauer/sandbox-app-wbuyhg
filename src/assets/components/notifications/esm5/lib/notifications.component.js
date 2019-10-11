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
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.faBell = faBell;
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
        var pauser = new BehaviorSubject(false);
        /** @type {?} */
        var source = interval(3600000).pipe(startWith(0), exhaustMap(function () { return _this.poll(); }));
        pauser.pipe(switchMap(function (paused) { return paused ? NEVER : source.pipe(materialize()); }), dematerialize()).subscribe();
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                // pause the poll and make a call. once finished, turn the poll on again and unsubscribe
                pauser.next(true);
                _this.poll().pipe(finalize(function () {
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
        return this.http.get(this.ssoBaseUrl + "/app/v1/user/notifications", { withCredentials: true }).pipe(tap(function (resp) {
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
            this.http.put(this.ssoBaseUrl + "/app/v1/user/notifications/" + item.id + "/read", null, { withCredentials: true }).pipe(tap(function () {
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
            this.http.put(this.ssoBaseUrl + "/app/v1/user/notifications/" + item.id + "/dismiss", null, { withCredentials: true }).pipe(tap(function () {
                _this.notifications.items.splice(index, 1);
                if (item.status === SurescriptsNotificationStatus.Unread) {
                    _this.unreadCount = _this.unreadCount - 1;
                }
            })).subscribe();
        }
    };
    NotificationsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'surescripts-notifications',
                    template: "<div class=\"d-inline-block\" ngbDropdown [placement]=\"['bottom', 'bottom-right']\" display=\"dynamic\" autoClose=\"outside\">\r\n    <a ngbDropdownToggle class=\"nav-link\" id=\"surescripts-notifications-icon\" [ngClass]=\"{'new': unreadCount > 0 }\" title=\"{{unreadCount}} unread notifications\" data-toggle=\"dropdown\">\r\n        <fa-icon [icon]=\"faBell\" [fixedWidth]=\"true\" size=\"lg\"></fa-icon>\r\n    </a>\r\n    <div ngbDropdownMenu>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\" id=\"notifications-title\">Notifications ({{unreadCount}})</h5>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item flex-column align-items-start\" *ngIf=\"notifications?.items?.length === 0\">\r\n                    <span>No notifications at this time.</span>\r\n                </li>\r\n                <li class=\"list-group-item flex-column align-items-start\" id=\"{{notification?.id}}\" (click)=\"itemClicked(notification)\" [ngClass]=\"{ 'read': notification?.status === SurescriptsNotificationStatus.Read}\" *ngFor=\"let notification of notifications?.items; index as j;\">\r\n                    <h6 class=\"mb-1 text-truncate\">\r\n                        <a href=\"{{notifications?.baseUrl}}/notifications/{{notification?.id}}\"  id=\"{{notification?.id}}-notification-title\" title=\"View All Notifications\">{{notification.title}}</a>\r\n                    </h6>\r\n                    <p class=\"mb-1 text-truncate\" title=\"{{notification.summary}}\" id=\"{{notification?.id}}-notification-summary\">{{notification.summary}}</p>\r\n                    <span class=\"d-flex w-100 justify-content-between\">\r\n                        <small class=\"text-muted\">{{notification.readablePostedDate || (notification.postedDate | date:'shortDate') }}</small>\r\n                        <small class=\"text-muted\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"dismiss($event, notification)\" id=\"{{notification?.id}}-notification-dismiss\">Dismiss</a>\r\n                        </small>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"card-footer text-center\">\r\n                <a href=\"{{notifications?.baseUrl}}/notifications\" id=\"view-all-notifications\" title=\"View All Notifications\">View All</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>",
                    styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}#surescripts-notifications-icon.new{color:#f7901e}li{cursor:pointer;padding:.75rem}li.read{background-color:#f3f3f3}li h6>a,li span>small>a{color:inherit}.dropdown-menu{width:500px;max-height:400px;overflow-x:auto;padding:0}.dropdown-menu .card-title{margin-bottom:0}.dropdown-menu .card-body{padding:.75rem}.dropdown-menu .card-footer{border-top:none;background-color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    NotificationsComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Router }
    ]; };
    NotificationsComponent.propDecorators = {
        ssoBaseUrl: [{ type: Input }]
    };
    return NotificationsComponent;
}());
export { NotificationsComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNFLE9BQU8sRUFBYyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBUyxNQUFNLGlCQUFpQixDQUFDOztJQWlCN0QsZ0NBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVA1RCxjQUF5QixNQUFNLENBQUM7UUFLaEMsbUJBQWMsQ0FBQyxDQUFDO1FBQ2hCLHFDQUFnQyw2QkFBNkIsQ0FBQztLQUNHOzs7O0lBRWpFLHlDQUFROzs7SUFBUjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENB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QThCLElBQUksQ0FBQyxFQUFFLGFBQVUsRUFBRSxJQUFJLEVBQzlHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLDZCQUE2QixDQUFDLE1BQU0sRUFBRTtvQkFDeEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztpQkFDekM7YUFDRixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQjtLQUNGOztnQkE1RUYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxnK0VBQTZDOztpQkFFOUM7Ozs7Z0JBZFEsVUFBVTtnQkFPVixNQUFNOzs7NkJBWVosS0FBSzs7aUNBcEJSOztTQWdCYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3VyZXNjcmlwdHNOb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgdGFwLCBleGhhdXN0TWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgZmluYWxpemUsIGRlbWF0ZXJpYWxpemUsIG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBmYUJlbGwsIEljb25EZWZpbml0aW9uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgU3VyZXNjcmlwdHNOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tc3RhdHVzLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBpbnRlcnZhbCwgQmVoYXZpb3JTdWJqZWN0LCBORVZFUiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3N1cmVzY3JpcHRzLW5vdGlmaWNhdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBmYUJlbGw6IEljb25EZWZpbml0aW9uID0gZmFCZWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNzb0Jhc2VVcmw6IHN0cmluZztcclxuICBub3RpZmljYXRpb25zOiBTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnM7XHJcbiAgdW5yZWFkQ291bnQgPSAwO1xyXG4gIFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzID0gU3VyZXNjcmlwdHNOb3RpZmljYXRpb25TdGF0dXM7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3NvQmFzZVVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wic3NvQmFzZVVybFwiIGlzIHJlcXVpcmVkLicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zc29CYXNlVXJsID0gdGhpcy5zc29CYXNlVXJsLnJlcGxhY2UoL1xcLyskLywgJycpO1xyXG5cclxuICAgIGNvbnN0IHBhdXNlciA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAgIC8vIHBvbGwgZXZlcnkgaG91ci5cclxuICAgIGNvbnN0IHNvdXJjZSA9IGludGVydmFsKDM2MDAwMDApLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgwKSxcclxuICAgICAgZXhoYXVzdE1hcCgoKSA9PiB0aGlzLnBvbGwoKSlcclxuICAgICk7XHJcblxyXG4gICAgcGF1c2VyLnBpcGUoc3dpdGNoTWFwKFxyXG4gICAgICBwYXVzZWQgPT4gcGF1c2VkID8gTkVWRVIgOiBzb3VyY2UucGlwZShtYXRlcmlhbGl6ZSgpKVxyXG4gICAgKSwgZGVtYXRlcmlhbGl6ZSgpKS5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIC8vIHBhdXNlIHRoZSBwb2xsIGFuZCBtYWtlIGEgY2FsbC4gb25jZSBmaW5pc2hlZCwgdHVybiB0aGUgcG9sbCBvbiBhZ2FpbiBhbmQgdW5zdWJzY3JpYmVcclxuICAgICAgICBwYXVzZXIubmV4dCh0cnVlKTtcclxuICAgICAgICB0aGlzLnBvbGwoKS5waXBlKGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICAgIHBhdXNlci5uZXh0KGZhbHNlKTtcclxuICAgICAgICB9KSkuc3Vic2NyaWJlKCkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvbGwoKTogT2JzZXJ2YWJsZTxTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnM+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN1cmVzY3JpcHRzTm90aWZpY2F0aW9ucz4oYCR7dGhpcy5zc29CYXNlVXJsfS9hcHAvdjEvdXNlci9ub3RpZmljYXRpb25zYCxcclxuICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUodGFwKChyZXNwOiBTdXJlc2NyaXB0c05vdGlmaWNhdGlvbnMpID0+IHtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gbmV3IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9ucyhyZXNwKTtcclxuICAgICAgdGhpcy51bnJlYWRDb3VudCA9IHRoaXMubm90aWZpY2F0aW9ucy5pdGVtcy5maWx0ZXIoeCA9PiB4LnN0YXR1cyA9PT0gU3VyZXNjcmlwdHNOb3RpZmljYXRpb25TdGF0dXMuVW5yZWFkKS5sZW5ndGg7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBpdGVtQ2xpY2tlZChpdGVtOiBTdXJlc2NyaXB0c05vdGlmaWNhdGlvbikge1xyXG4gICAgaWYgKGl0ZW0uc3RhdHVzID09PSBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cy5VbnJlYWQpIHtcclxuICAgICAgdGhpcy5odHRwLnB1dDxTdXJlc2NyaXB0c05vdGlmaWNhdGlvbj4oYCR7dGhpcy5zc29CYXNlVXJsfS9hcHAvdjEvdXNlci9ub3RpZmljYXRpb25zLyR7aXRlbS5pZH0vcmVhZGAsIG51bGwsXHJcbiAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUodGFwKCgpID0+IHtcclxuICAgICAgICBpdGVtLnN0YXR1cyA9IFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uU3RhdHVzLlJlYWQ7XHJcbiAgICAgICAgdGhpcy51bnJlYWRDb3VudCA9IHRoaXMudW5yZWFkQ291bnQgLSAxO1xyXG4gICAgICB9KSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNtaXNzKCRldmVudDogTW91c2VFdmVudCwgaXRlbTogU3VyZXNjcmlwdHNOb3RpZmljYXRpb24pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ub3RpZmljYXRpb25zLml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLmh0dHAucHV0PFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uPihgJHt0aGlzLnNzb0Jhc2VVcmx9L2FwcC92MS91c2VyL25vdGlmaWNhdGlvbnMvJHtpdGVtLmlkfS9kaXNtaXNzYCwgbnVsbCxcclxuICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkucGlwZSh0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gU3VyZXNjcmlwdHNOb3RpZmljYXRpb25TdGF0dXMuVW5yZWFkKSB7XHJcbiAgICAgICAgICB0aGlzLnVucmVhZENvdW50ID0gdGhpcy51bnJlYWRDb3VudCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==