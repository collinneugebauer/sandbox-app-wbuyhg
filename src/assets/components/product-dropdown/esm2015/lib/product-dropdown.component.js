/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsProduct } from './product.model';
import { map, tap } from 'rxjs/operators';
export class ProductDropdownComponent {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ssoBaseUrl) {
            throw new Error('"ssoBaseUrl" is required.');
        }
        this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
        this.http.get(`${this.ssoBaseUrl}/app/v1/user/menu`, { withCredentials: true }).pipe(map(resp => {
            /** @type {?} */
            const url = window.location.href.toLowerCase();
            /** @type {?} */
            let selected = [];
            /** @type {?} */
            const response = resp.map(x => {
                if (x.children && x.children.length > 0) {
                    selected = selected.concat(x.children.filter(y => y.link && url.startsWith(y.link.toLowerCase())));
                }
                else {
                    if (url.startsWith(x.link && x.link.toLowerCase())) {
                        selected = selected.concat(x);
                    }
                }
                return new SurescriptsProduct(x);
            });
            /** @type {?} */
            const longest = selected.length > 0 ? selected.reduce(function (a, b) { return a.link.length > b.link.length ? a : b; }) : null;
            return response.map(x => {
                if (longest) {
                    if (x.children && x.children.length > 0) {
                        x.children.map(y => y.selected = y.text === longest.text && y.link === longest.link);
                    }
                    x.selected = x.text === longest.text && x.link === longest.link;
                }
                return x;
            });
        }), tap(resp => this.products = resp)).subscribe();
    }
}
ProductDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'surescripts-product-dropdown',
                template: "<div ngbDropdown *ngIf=\"products && products.length > 0\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </a>\r\n  <div ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let p of products; index as i;\">\r\n        <a class=\"dropdown-item\" id=\"{{'app-'+i}}\" *ngIf=\"p.link; else heading\" [ngClass]=\"{active : p.selected}\" href=\"{{p.link}}\">{{p.text}}</a>\r\n        <ng-template #heading>\r\n          <h6 class=\"dropdown-header\" id=\"{{'heading-'+i}}\">{{p.text}}</h6>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"p.children?.length > 0\">\r\n        <ng-container *ngFor=\"let c of p.children; index as j;\">\r\n            <a class=\"dropdown-item\" id=\"{{'app-'+i+'-child-'+j}}\" *ngIf=\"c.link; else childheading\" [ngClass]=\"{active : c.selected}\" href=\"{{c.link}}\">{{c.text}}</a>\r\n            <ng-template #childheading>\r\n              <h6 class=\"dropdown-header\" id=\"{{'heading-'+i+'-child-'+j}}\">{{c.text}}</h6>\r\n            </ng-template>\r\n        </ng-container>\r\n        <div class=\"dropdown-divider\"></div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>",
                styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}"]
            }] }
];
/** @nocollapse */
ProductDropdownComponent.ctorParameters = () => [
    { type: HttpClient }
];
ProductDropdownComponent.propDecorators = {
    ssoBaseUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProductDropdownComponent.prototype.ssoBaseUrl;
    /** @type {?} */
    ProductDropdownComponent.prototype.products;
    /** @type {?} */
    ProductDropdownComponent.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvcHJvZHVjdC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPMUMsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUtuQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0tBQUs7Ozs7SUFJekMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixHQUFHLElBQUksQ0FBQyxVQUFVLG1CQUFtQixFQUMxRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7O1lBQ3pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUMvQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7O1lBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BHO3FCQUFNO29CQUNMLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTt3QkFDbEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQUNELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7O1lBQ0wsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFaEksT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN4RjtvQkFDRCxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ2pFO2dCQUNELE9BQU8sQ0FBQyxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUN4RDs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QywwdENBQWdEOzthQUVqRDs7OztZQVJRLFVBQVU7Ozt5QkFXaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdXJlc2NyaXB0c1Byb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QubW9kZWwnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VyZXNjcmlwdHMtcHJvZHVjdC1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBzc29CYXNlVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIHByb2R1Y3RzOiBBcnJheTxTdXJlc2NyaXB0c1Byb2R1Y3Q+O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5zc29CYXNlVXJsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJzc29CYXNlVXJsXCIgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zc29CYXNlVXJsID0gdGhpcy5zc29CYXNlVXJsLnJlcGxhY2UoL1xcLyskLywgJycpO1xyXG4gICAgdGhpcy5odHRwLmdldDxBcnJheTxTdXJlc2NyaXB0c1Byb2R1Y3Q+PihgJHt0aGlzLnNzb0Jhc2VVcmx9L2FwcC92MS91c2VyL21lbnVgLFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUobWFwKHJlc3AgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXNwLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoeC5jaGlsZHJlbiAmJiB4LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuY29uY2F0KHguY2hpbGRyZW4uZmlsdGVyKHkgPT4geS5saW5rICYmIHVybC5zdGFydHNXaXRoKHkubGluay50b0xvd2VyQ2FzZSgpKSkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoeC5saW5rICYmIHgubGluay50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkLmNvbmNhdCh4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdXJlc2NyaXB0c1Byb2R1Y3QoeCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgbG9uZ2VzdCA9IHNlbGVjdGVkLmxlbmd0aCA+IDAgPyBzZWxlY3RlZC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEubGluay5sZW5ndGggPiBiLmxpbmsubGVuZ3RoID8gYSA6IGI7IH0pIDogbnVsbDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubWFwKHggPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9uZ2VzdCkge1xyXG4gICAgICAgICAgICAgIGlmICh4LmNoaWxkcmVuICYmIHguY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICB4LmNoaWxkcmVuLm1hcCh5ID0+IHkuc2VsZWN0ZWQgPSB5LnRleHQgPT09IGxvbmdlc3QudGV4dCAmJiB5LmxpbmsgPT09IGxvbmdlc3QubGluayk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHguc2VsZWN0ZWQgPSB4LnRleHQgPT09IGxvbmdlc3QudGV4dCAmJiB4LmxpbmsgPT09IGxvbmdlc3QubGluaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLCB0YXAocmVzcCA9PiB0aGlzLnByb2R1Y3RzID0gcmVzcCkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=