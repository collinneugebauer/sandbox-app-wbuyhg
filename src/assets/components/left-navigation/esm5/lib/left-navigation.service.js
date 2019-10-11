/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Output, EventEmitter, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
var LeftNavigationService = /** @class */ (function () {
    function LeftNavigationService() {
        this.items = new EventEmitter();
        this.toggle = new EventEmitter();
        this.header = new EventEmitter();
        this.displayFooter = new EventEmitter();
        this.collapsed = false;
    }
    /**
     * @param {?=} header
     * @param {?=} items
     * @param {?=} displayFooter
     * @return {?}
     */
    LeftNavigationService.prototype.init = /**
     * @param {?=} header
     * @param {?=} items
     * @param {?=} displayFooter
     * @return {?}
     */
    function (header, items, displayFooter) {
        var _this = this;
        if (displayFooter === null || displayFooter === undefined) {
            displayFooter = true;
        }
        this.header.emit(header);
        this.items.emit(items);
        this.displayFooter.emit(displayFooter);
        this.toggle.subscribe(function (collapsed) { _this.collapsed = collapsed; });
    };
    LeftNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
        { type: NgModule }
    ];
    LeftNavigationService.propDecorators = {
        items: [{ type: Output }],
        toggle: [{ type: Output }],
        header: [{ type: Output }],
        displayFooter: [{ type: Output }]
    };
    /** @nocollapse */ LeftNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LeftNavigationService_Factory() { return new LeftNavigationService(); }, token: LeftNavigationService, providedIn: "root" });
    return LeftNavigationService;
}());
export { LeftNavigationService };
if (false) {
    /** @type {?} */
    LeftNavigationService.prototype.items;
    /** @type {?} */
    LeftNavigationService.prototype.toggle;
    /** @type {?} */
    LeftNavigationService.prototype.header;
    /** @type {?} */
    LeftNavigationService.prototype.displayFooter;
    /** @type {?} */
    LeftNavigationService.prototype.collapsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbGVmdC1uYXZpZ2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2xlZnQtbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O1FBUXZFLGFBQWdELElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsY0FBMEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxjQUE2QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLHFCQUFpRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLGlCQUFZLEtBQUssQ0FBQzs7Ozs7Ozs7SUFDbEIsb0NBQUk7Ozs7OztJQUFKLFVBQUssTUFBbUIsRUFBRSxLQUFzQixFQUFFLGFBQXVCO1FBQXpFLGlCQVFDO1FBUEcsSUFBSSxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdkQsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsU0FBa0IsSUFBTyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRjs7Z0JBbEJKLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0EsUUFBUTs7O3dCQUVKLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO2dDQUNOLE1BQU07OztnQ0FYWDs7U0FPYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2SXRlbSwgTmF2SGVhZGluZyB9IGZyb20gJy4vbmF2LWl0ZW0ubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgTGVmdE5hdmlnYXRpb25TZXJ2aWNlIHtcclxuICAgIEBPdXRwdXQoKSBpdGVtczogRXZlbnRFbWl0dGVyPEFycmF5PE5hdkl0ZW0+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBoZWFkZXI6IEV2ZW50RW1pdHRlcjxOYXZIZWFkaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBkaXNwbGF5Rm9vdGVyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgIGluaXQoaGVhZGVyPzogTmF2SGVhZGluZywgaXRlbXM/OiBBcnJheTxOYXZJdGVtPiwgZGlzcGxheUZvb3Rlcj86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoZGlzcGxheUZvb3RlciA9PT0gbnVsbCB8fCBkaXNwbGF5Rm9vdGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGlzcGxheUZvb3RlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVyLmVtaXQoaGVhZGVyKTtcclxuICAgICAgICB0aGlzLml0ZW1zLmVtaXQoaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUZvb3Rlci5lbWl0KGRpc3BsYXlGb290ZXIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlLnN1YnNjcmliZSgoY29sbGFwc2VkOiBib29sZWFuKSA9PiB7IHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkOyB9KTtcclxuICAgIH1cclxufSJdfQ==