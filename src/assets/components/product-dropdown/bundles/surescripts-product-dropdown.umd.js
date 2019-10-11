(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@surescripts/product-dropdown', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = global || self, factory((global.surescripts = global.surescripts || {}, global.surescripts['product-dropdown'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common, global['@ng-bootstrap/ng-bootstrap']));
}(this, function (exports, core, http, operators, common, ngBootstrap) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SurescriptsProduct = /** @class */ (function () {
        function SurescriptsProduct(init) {
            Object.assign(this, init);
            if (init && init.children && init.children.length > 0) {
                this.children = init.children.map(function (x) { return new SurescriptsProduct(x); });
            }
        }
        return SurescriptsProduct;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.http.get(this.ssoBaseUrl + "/app/v1/user/menu", { withCredentials: true }).pipe(operators.map(function (resp) {
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
            }), operators.tap(function (resp) { return _this.products = resp; })).subscribe();
        };
        ProductDropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'surescripts-product-dropdown',
                        template: "<div ngbDropdown *ngIf=\"products && products.length > 0\" display=\"dynamic\">\r\n  <a ngbDropdownToggle class=\"nav-link\" data-toggle=\"dropdown\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </a>\r\n  <div ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let p of products; index as i;\">\r\n        <a class=\"dropdown-item\" id=\"{{'app-'+i}}\" *ngIf=\"p.link; else heading\" [ngClass]=\"{active : p.selected}\" href=\"{{p.link}}\">{{p.text}}</a>\r\n        <ng-template #heading>\r\n          <h6 class=\"dropdown-header\" id=\"{{'heading-'+i}}\">{{p.text}}</h6>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"p.children?.length > 0\">\r\n        <ng-container *ngFor=\"let c of p.children; index as j;\">\r\n            <a class=\"dropdown-item\" id=\"{{'app-'+i+'-child-'+j}}\" *ngIf=\"c.link; else childheading\" [ngClass]=\"{active : c.selected}\" href=\"{{c.link}}\">{{c.text}}</a>\r\n            <ng-template #childheading>\r\n              <h6 class=\"dropdown-header\" id=\"{{'heading-'+i+'-child-'+j}}\">{{c.text}}</h6>\r\n            </ng-template>\r\n        </ng-container>\r\n        <div class=\"dropdown-divider\"></div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>",
                        styles: [".dropdown-toggle::after{display:none}.dropdown-toggle{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        ProductDropdownComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        ProductDropdownComponent.propDecorators = {
            ssoBaseUrl: [{ type: core.Input }]
        };
        return ProductDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ProductDropdownModule = /** @class */ (function () {
        function ProductDropdownModule() {
        }
        ProductDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            ngBootstrap.NgbDropdownModule
                        ],
                        declarations: [ProductDropdownComponent],
                        exports: [ProductDropdownComponent]
                    },] }
        ];
        return ProductDropdownModule;
    }());

    exports.ProductDropdownComponent = ProductDropdownComponent;
    exports.ProductDropdownModule = ProductDropdownModule;
    exports.SurescriptsProduct = SurescriptsProduct;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=surescripts-product-dropdown.umd.js.map
