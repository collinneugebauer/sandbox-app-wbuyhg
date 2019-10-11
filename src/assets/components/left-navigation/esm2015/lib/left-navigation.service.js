/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Output, EventEmitter, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class LeftNavigationService {
    constructor() {
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
    init(header, items, displayFooter) {
        if (displayFooter === null || displayFooter === undefined) {
            displayFooter = true;
        }
        this.header.emit(header);
        this.items.emit(items);
        this.displayFooter.emit(displayFooter);
        this.toggle.subscribe((collapsed) => { this.collapsed = collapsed; });
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbGVmdC1uYXZpZ2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2xlZnQtbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zRSxNQUFNLE9BQU8scUJBQXFCOztRQUM5QixhQUFnRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGNBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsY0FBNkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxxQkFBaUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxpQkFBWSxLQUFLLENBQUM7Ozs7Ozs7O0lBQ2xCLElBQUksQ0FBQyxNQUFtQixFQUFFLEtBQXNCLEVBQUUsYUFBdUI7UUFDckUsSUFBSSxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdkQsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEY7OztZQWxCSixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7WUFDQSxRQUFROzs7b0JBRUosTUFBTTtxQkFDTixNQUFNO3FCQUNOLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZJdGVtLCBOYXZIZWFkaW5nIH0gZnJvbSAnLi9uYXYtaXRlbS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBMZWZ0TmF2aWdhdGlvblNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zOiBFdmVudEVtaXR0ZXI8QXJyYXk8TmF2SXRlbT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGhlYWRlcjogRXZlbnRFbWl0dGVyPE5hdkhlYWRpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGRpc3BsYXlGb290ZXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgaW5pdChoZWFkZXI/OiBOYXZIZWFkaW5nLCBpdGVtcz86IEFycmF5PE5hdkl0ZW0+LCBkaXNwbGF5Rm9vdGVyPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkaXNwbGF5Rm9vdGVyID09PSBudWxsIHx8IGRpc3BsYXlGb290ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5Rm9vdGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuZW1pdChoZWFkZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZW1pdChpdGVtcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Rm9vdGVyLmVtaXQoZGlzcGxheUZvb3Rlcik7XHJcbiAgICAgICAgdGhpcy50b2dnbGUuc3Vic2NyaWJlKChjb2xsYXBzZWQ6IGJvb2xlYW4pID0+IHsgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7IH0pO1xyXG4gICAgfVxyXG59Il19