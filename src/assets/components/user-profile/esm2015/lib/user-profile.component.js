/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsUserProfile } from './user-profile.model';
import { tap } from 'rxjs/operators';
export class UserProfileComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy91c2VyLXByb2ZpbGUvIiwic291cmNlcyI6WyJsaWIvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBVy9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIcEMsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLG9CQUFlLEtBQUssQ0FBQztLQUVvQjs7OztJQUl6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsR0FBRyxJQUFJLENBQUMsVUFBVSxzQkFBc0IsRUFDMUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRCxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNyQjs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywrdEJBQTRDOzthQUU3Qzs7OztZQVJRLFVBQVU7Ozt3QkFXaEIsS0FBSzt5QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1cmVzY3JpcHRzVXNlclByb2ZpbGUgfSBmcm9tICcuL3VzZXItcHJvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VyZXNjcmlwdHMtdXNlci1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvZ291dFVybDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNzb0Jhc2VVcmw6IHN0cmluZztcclxuICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG4gIGlzU3RhZ2luZyA9IGZhbHNlO1xyXG4gIGlzUHJvZHVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBwcm9maWxlOiBTdXJlc2NyaXB0c1VzZXJQcm9maWxlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubG9nb3V0VXJsID0gdGhpcy5sb2dvdXRVcmwgfHwgJ2xvZ291dCc7XHJcbiAgICBpZiAoIXRoaXMuc3NvQmFzZVVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wic3NvQmFzZVVybFwiIGlzIHJlcXVpcmVkLicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zc29CYXNlVXJsID0gdGhpcy5zc29CYXNlVXJsLnJlcGxhY2UoL1xcLyskLywgJycpO1xyXG4gICAgdGhpcy5odHRwLmdldDxTdXJlc2NyaXB0c1VzZXJQcm9maWxlPihgJHt0aGlzLnNzb0Jhc2VVcmx9L2FwcC92MS91c2VyL3Byb2ZpbGVgLFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUodGFwKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gcmVzcC5lbnZpcm9ubWVudCAmJiByZXNwLmVudmlyb25tZW50LnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFnaW5nID0gdGhpcy5lbnZpcm9ubWVudCA9PT0gJ1NUQUdJTkcnO1xyXG4gICAgICAgICAgICB0aGlzLmlzUHJvZHVjdGlvbiA9IHRoaXMuZW52aXJvbm1lbnQgPT09ICdQUk9EVUNUSU9OJztcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlID0gbmV3IFN1cmVzY3JpcHRzVXNlclByb2ZpbGUocmVzcCk7XHJcbiAgICAgICAgfSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=