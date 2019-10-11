import { Component, Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SurescriptsProduct {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
        if (init && init.children && init.children.length > 0) {
            this.children = init.children.map(x => new SurescriptsProduct(x));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProductDropdownComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProductDropdownModule {
}
ProductDropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    NgbDropdownModule
                ],
                declarations: [ProductDropdownComponent],
                exports: [ProductDropdownComponent]
            },] }
];

export { ProductDropdownComponent, ProductDropdownModule, SurescriptsProduct };
//# sourceMappingURL=surescripts-product-dropdown.js.map
