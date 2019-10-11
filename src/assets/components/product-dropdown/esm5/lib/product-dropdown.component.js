/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsProduct } from './product.model';
import { map, tap } from 'rxjs/operators';
var ProductDropdownComponent = /** @class */ (function () {
    function ProductDropdownComponent(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    ProductDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ssoBaseUrl) {
            throw new Error('"ssoBaseUrl" is required.');
        }
        this.ssoBaseUrl = this.ssoBaseUrl.replace(/\/+$/, '');
        this.http.get(this.ssoBaseUrl + "/app/v1/user/menu", { withCredentials: true }).pipe(map(function (resp) {
            /** @type {?} */
            var url = window.location.href.toLowerCase();
            /** @type {?} */
            var selected = [];
            /** @type {?} */
            var response = resp.map(function (x) {
                if (x.children && x.children.length > 0) {
                    selected = selected.concat(x.children.filter(function (y) { return y.link && url.startsWith(y.link.toLowerCase()); }));
                }
                else {
                    if (url.startsWith(x.link && x.link.toLowerCase())) {
                        selected = selected.concat(x);
                    }
                }
                return new SurescriptsProduct(x);
            });
            /** @type {?} */
            var longest = selected.length > 0 ? selected.reduce(function (a, b) { return a.link.length > b.link.length ? a : b; }) : null;
            return response.map(function (x) {
                if (longest) {
                    if (x.children && x.children.length > 0) {
                        x.children.map(function (y) { return y.selected = y.text === longest.text && y.link === longest.link; });
                    }
                    x.selected = x.text === longest.text && x.link === longest.link;
                }
                return x;
            });
        }), tap(function (resp) { return _this.products = resp; })).subscribe();
    };
    ProductDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'surescripts-product-dropdown',
                    template: "<div ngbDropdown *ngIf=\"products && products.length > 0\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </a>\r\n  <div ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let p of products; index as i;\">\r\n        <a class=\"dropdown-item\" id=\"{{'app-'+i}}\" *ngIf=\"p.link; else heading\" [ngClass]=\"{active : p.selected}\" href=\"{{p.link}}\">{{p.text}}</a>\r\n        <ng-template #heading>\r\n          <h6 class=\"dropdown-header\" id=\"{{'heading-'+i}}\">{{p.text}}</h6>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"p.children?.length > 0\">\r\n        <ng-container *ngFor=\"let c of p.children; index as j;\">\r\n            <a class=\"dropdown-item\" id=\"{{'app-'+i+'-child-'+j}}\" *ngIf=\"c.link; else childheading\" [ngClass]=\"{active : c.selected}\" href=\"{{c.link}}\">{{c.text}}</a>\r\n            <ng-template #childheading>\r\n              <h6 class=\"dropdown-header\" id=\"{{'heading-'+i+'-child-'+j}}\">{{c.text}}</h6>\r\n            </ng-template>\r\n        </ng-container>\r\n        <div class=\"dropdown-divider\"></div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>",
                    styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ProductDropdownComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ProductDropdownComponent.propDecorators = {
        ssoBaseUrl: [{ type: Input }]
    };
    return ProductDropdownComponent;
}());
export { ProductDropdownComponent };
if (false) {
    /** @type {?} */
    ProductDropdownComponent.prototype.ssoBaseUrl;
    /** @type {?} */
    ProductDropdownComponent.prototype.products;
    /** @type {?} */
    ProductDropdownComponent.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvcHJvZHVjdC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBWXhDLGtDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0tBQUs7Ozs7SUFJekMsMkNBQVE7OztJQUFSO1FBQUEsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixJQUFJLENBQUMsVUFBVSxzQkFBbUIsRUFDMUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTs7WUFDdEMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQy9DLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7WUFDbEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BHO3FCQUFNO29CQUNMLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTt3QkFDbEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQUNELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7O1lBQ0wsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFaEksT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDbkIsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDckMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQS9ELENBQStELENBQUMsQ0FBQztxQkFDeEY7b0JBQ0QsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDO2lCQUNqRTtnQkFDRCxPQUFPLENBQUMsQ0FBQzthQUNWLENBQUMsQ0FBQztTQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDeEQ7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsMHRDQUFnRDs7aUJBRWpEOzs7O2dCQVJRLFVBQVU7Ozs2QkFXaEIsS0FBSzs7bUNBWlI7O1NBVWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1cmVzY3JpcHRzUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5tb2RlbCc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdXJlc2NyaXB0cy1wcm9kdWN0LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNzb0Jhc2VVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgcHJvZHVjdHM6IEFycmF5PFN1cmVzY3JpcHRzUHJvZHVjdD47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnNzb0Jhc2VVcmwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInNzb0Jhc2VVcmxcIiBpcyByZXF1aXJlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNzb0Jhc2VVcmwgPSB0aGlzLnNzb0Jhc2VVcmwucmVwbGFjZSgvXFwvKyQvLCAnJyk7XHJcbiAgICB0aGlzLmh0dHAuZ2V0PEFycmF5PFN1cmVzY3JpcHRzUHJvZHVjdD4+KGAke3RoaXMuc3NvQmFzZVVybH0vYXBwL3YxL3VzZXIvbWVudWAsXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkucGlwZShtYXAocmVzcCA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlc3AubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh4LmNoaWxkcmVuICYmIHguY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZC5jb25jYXQoeC5jaGlsZHJlbi5maWx0ZXIoeSA9PiB5LmxpbmsgJiYgdXJsLnN0YXJ0c1dpdGgoeS5saW5rLnRvTG93ZXJDYXNlKCkpKSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCh4LmxpbmsgJiYgeC5saW5rLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuY29uY2F0KHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFN1cmVzY3JpcHRzUHJvZHVjdCh4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBsb25nZXN0ID0gc2VsZWN0ZWQubGVuZ3RoID4gMCA/IHNlbGVjdGVkLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5saW5rLmxlbmd0aCA+IGIubGluay5sZW5ndGggPyBhIDogYjsgfSkgOiBudWxsO1xyXG5cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb25nZXN0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHguY2hpbGRyZW4gJiYgeC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHguY2hpbGRyZW4ubWFwKHkgPT4geS5zZWxlY3RlZCA9IHkudGV4dCA9PT0gbG9uZ2VzdC50ZXh0ICYmIHkubGluayA9PT0gbG9uZ2VzdC5saW5rKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeC5zZWxlY3RlZCA9IHgudGV4dCA9PT0gbG9uZ2VzdC50ZXh0ICYmIHgubGluayA9PT0gbG9uZ2VzdC5saW5rO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSksIHRhcChyZXNwID0+IHRoaXMucHJvZHVjdHMgPSByZXNwKSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==