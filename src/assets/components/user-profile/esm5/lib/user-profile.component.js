/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsUserProfile } from './user-profile.model';
import { tap } from 'rxjs/operators';
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
        this.http.get(this.ssoBaseUrl + "/app/v1/user/profile", { withCredentials: true }).pipe(tap(function (resp) {
            _this.environment = resp.environment && resp.environment.toLocaleUpperCase();
            _this.isStaging = _this.environment === 'STAGING';
            _this.isProduction = _this.environment === 'PRODUCTION';
            _this.profile = new SurescriptsUserProfile(resp);
        })).subscribe();
    };
    UserProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'surescripts-user-profile',
                    template: "<span *ngIf=\"environment && !isProduction\" class=\"environment-identifier navbar-text pr-2\" [ngClass]=\"{'staging': isStaging}\" title=\"Current Environment: {{environment}}\">{{environment}}</span>\r\n<div class=\"d-inline-block\" ngbDropdown placement=\"bottom-right\" *ngIf=\"profile?.user\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">{{profile?.user?.lastName}}, {{profile?.user?.firstName}}</a>\r\n  <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\" id=\"userprofile-profile-link\" href=\"{{profile?.baseUrl}}/profile\">View Profile</a>\r\n      <a class=\"dropdown-item\" id=\"userprofile-logout-link\" href=\"{{logoutUrl}}\">Logout</a>\r\n  </div>\r\n</div>",
                    styles: [".dropdown-toggle{cursor:pointer}.environment-identifier{font-weight:700;letter-spacing:.05em;text-transform:uppercase}.environment-identifier.staging{color:#f7901e}"]
                }] }
    ];
    /** @nocollapse */
    UserProfileComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    UserProfileComponent.propDecorators = {
        logoutUrl: [{ type: Input }],
        ssoBaseUrl: [{ type: Input }]
    };
    return UserProfileComponent;
}());
export { UserProfileComponent };
if (false) {
    /** @type {?} */
    UserProfileComponent.prototype.logoutUrl;
    /** @type {?} */
    UserProfileComponent.prototype.ssoBaseUrl;
    /** @type {?} */
    UserProfileComponent.prototype.environment;
    /** @type {?} */
    UserProfileComponent.prototype.isStaging;
    /** @type {?} */
    UserProfileComponent.prototype.isProduction;
    /** @type {?} */
    UserProfileComponent.prototype.profile;
    /** @type {?} */
    UserProfileComponent.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy91c2VyLXByb2ZpbGUvIiwic291cmNlcyI6WyJsaWIvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFrQm5DLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBDLGlCQUFZLEtBQUssQ0FBQztRQUNsQixvQkFBZSxLQUFLLENBQUM7S0FFb0I7Ozs7SUFJekMsdUNBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixJQUFJLENBQUMsVUFBVSx5QkFBc0IsRUFDMUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNwQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzVFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUM7WUFDaEQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQztZQUN0RCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkQsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDckI7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsK3RCQUE0Qzs7aUJBRTdDOzs7O2dCQVJRLFVBQVU7Ozs0QkFXaEIsS0FBSzs2QkFHTCxLQUFLOzsrQkFmUjs7U0FVYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3VyZXNjcmlwdHNVc2VyUHJvZmlsZSB9IGZyb20gJy4vdXNlci1wcm9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdXJlc2NyaXB0cy11c2VyLXByb2ZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9nb3V0VXJsOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3NvQmFzZVVybDogc3RyaW5nO1xyXG4gIGVudmlyb25tZW50OiBzdHJpbmc7XHJcbiAgaXNTdGFnaW5nID0gZmFsc2U7XHJcbiAgaXNQcm9kdWN0aW9uID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIHByb2ZpbGU6IFN1cmVzY3JpcHRzVXNlclByb2ZpbGU7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2dvdXRVcmwgPSB0aGlzLmxvZ291dFVybCB8fCAnbG9nb3V0JztcclxuICAgIGlmICghdGhpcy5zc29CYXNlVXJsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJzc29CYXNlVXJsXCIgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNzb0Jhc2VVcmwgPSB0aGlzLnNzb0Jhc2VVcmwucmVwbGFjZSgvXFwvKyQvLCAnJyk7XHJcbiAgICB0aGlzLmh0dHAuZ2V0PFN1cmVzY3JpcHRzVXNlclByb2ZpbGU+KGAke3RoaXMuc3NvQmFzZVVybH0vYXBwL3YxL3VzZXIvcHJvZmlsZWAsXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkucGlwZSh0YXAocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSByZXNwLmVudmlyb25tZW50ICYmIHJlc3AuZW52aXJvbm1lbnQudG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWdpbmcgPSB0aGlzLmVudmlyb25tZW50ID09PSAnU1RBR0lORyc7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQcm9kdWN0aW9uID0gdGhpcy5lbnZpcm9ubWVudCA9PT0gJ1BST0RVQ1RJT04nO1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBuZXcgU3VyZXNjcmlwdHNVc2VyUHJvZmlsZShyZXNwKTtcclxuICAgICAgICB9KSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==