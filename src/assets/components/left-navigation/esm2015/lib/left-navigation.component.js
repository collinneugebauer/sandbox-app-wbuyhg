/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LeftNavigationService } from './left-navigation.service';
import { Router } from '@angular/router';
export class LeftNavigationComponent {
    /**
     * @param {?} leftNavService
     * @param {?} router
     */
    constructor(leftNavService, router) {
        this.leftNavService = leftNavService;
        this.router = router;
        this.collapsed = false;
        this.displayNav = false;
        this.displayFooter = true;
        this.highlightLinks = true;
        this.leftNavService.displayFooter.subscribe((display) => {
            this.displayFooter = display;
        });
        this.leftNavService.items.subscribe((items) => {
            if (items && items.length > 0) {
                this.items = items;
                this.displayNav = true;
            }
            else {
                this.displayNav = false;
            }
        });
        this.leftNavService.header.subscribe((header) => {
            if (header) {
                this.header = header;
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isLinkActive(item) {
        /** @type {?} */
        const charPos = this.router.url.indexOf('?');
        if (charPos > -1 && !item.queryParams) {
            return false;
        }
        else if (item.queryParams) {
            if (charPos === -1) {
                return false;
            }
            /** @type {?} */
            const tree = this.router.createUrlTree([item.url], { queryParams: item.queryParams });
            return this.router.url.startsWith(tree.toString());
        }
        /** @type {?} */
        const cleanUrl = charPos !== -1 ? this.router.url.slice(0, charPos) : this.router.url;
        return cleanUrl === item.url;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.collapsed = !this.collapsed;
        this.leftNavService.toggle.emit(this.collapsed);
    }
}
LeftNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'surescripts-left-navigation',
                template: "<nav class=\"sidebar\" [ngClass]=\"collapsed ? 'collapsed' : ''\" *ngIf=\"displayNav\">\r\n  <div class=\"sidebar-header\" *ngIf=\"header\">\r\n      <h1 [title]=\"header.title\">\r\n          <i class=\"icon\" *ngIf=\"header?.icon\">\r\n              <fa-icon [fixedWidth]=\"true\" [icon]=\"[header.icon.prefix, header.icon.name]\" *ngIf=\"header?.icon\" [size]=\"collapsed ? '1x' : '2x'\"></fa-icon>\r\n          </i> <span>{{header.title}}</span>\r\n      </h1>\r\n  </div>\r\n  <div class=\"sidebar-body\" [ngClass]=\"{'no-footer': !displayFooter, 'no-header': !header }\">\r\n      <ul class=\"nav flex-column\" *ngIf=\"items && items.length > 0\">\r\n          <li [class.active]=\"highlightLinks && item?.link?.relative ? isLinkActive(item.link) : false\" class=\"nav-item\" *ngFor=\"let item of items; let i = index\">\r\n            <a *ngIf=\"item.itemType === 'fn'\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" (click)=\"item?.onClick($event)\" href=\"javascript:void(0);\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <a *ngIf=\"item.itemType === 'link' && !item?.link?.relative\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\" [target]=\"item.link.target\" [href]=\"item.link.url\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <a *ngIf=\"item.itemType === 'link' && item?.link?.relative\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\" [target]=\"item.link.target\" [routerLink]=\"[item.link.url]\" [queryParams]=\"item.link.queryParams\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <hr *ngIf=\"item.itemType === 'hr'\" />\r\n            <h4 *ngIf=\"item.itemType === 'heading'\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" [id]=\"item.id\">{{item.text}}</h4>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n  <div class=\"sidebar-footer\" *ngIf=\"displayFooter\">\r\n      <div class=\"toggle collapse\" (click)=\"toggle()\"  title=\"Collapse Left Navigation\" id=\"leftnav-collapse\">\r\n          <fa-icon [icon]=\"['fas', 'chevron-left']\"></fa-icon> <fa-icon [icon]=\"['fas', 'chevron-left']\"></fa-icon>\r\n      </div>\r\n      <div class=\"toggle expand\" (click)=\"toggle()\" title=\"Expand Left Navigation\" id=\"leftnav-expand\">\r\n          <fa-icon [icon]=\"['fas', 'chevron-right']\"></fa-icon> <fa-icon [icon]=\"['fas', 'chevron-right']\"></fa-icon>\r\n      </div>\r\n  </div>\r\n</nav>\r\n"
            }] }
];
/** @nocollapse */
LeftNavigationComponent.ctorParameters = () => [
    { type: LeftNavigationService },
    { type: Router }
];
LeftNavigationComponent.propDecorators = {
    highlightLinks: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LeftNavigationComponent.prototype.items;
    /** @type {?} */
    LeftNavigationComponent.prototype.header;
    /** @type {?} */
    LeftNavigationComponent.prototype.collapsed;
    /** @type {?} */
    LeftNavigationComponent.prototype.displayNav;
    /** @type {?} */
    LeftNavigationComponent.prototype.displayFooter;
    /** @type {?} */
    LeftNavigationComponent.prototype.highlightLinks;
    /** @type {?} */
    LeftNavigationComponent.prototype.leftNavService;
    /** @type {?} */
    LeftNavigationComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy9sZWZ0LW5hdmlnYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGVmdC1uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFHLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTFDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBV2hDLFlBQW9CLGNBQXFDLEVBQVUsTUFBYztRQUE3RCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmpGLGlCQUFZLEtBQUssQ0FBQztRQUNsQixrQkFBYSxLQUFLLENBQUM7UUFDbkIscUJBQWdCLElBQUksQ0FBQztRQUNyQixzQkFDaUIsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUMzQjtTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtZQUN4RCxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUN4QjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7OztJQUVNLFlBQVksQ0FBQyxJQUFpQjs7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QixJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUM7YUFDaEI7O1lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7O1FBRUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0RixPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7OztJQUdqQyxNQUFNO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNuRDs7O1lBeERKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyxrb0dBQStDO2FBQ2xEOzs7O1lBUFEscUJBQXFCO1lBRXBCLE1BQU07Ozs2QkFjWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZJdGVtLCBOYXZIZWFkaW5nLCBOYXZJdGVtTGluayB9IGZyb20gJy4vbmF2LWl0ZW0ubW9kZWwnO1xyXG5pbXBvcnQgeyBMZWZ0TmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2xlZnQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQsIEljb25EZWZpbml0aW9uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3VyZXNjcmlwdHMtbGVmdC1uYXZpZ2F0aW9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWZ0TmF2aWdhdGlvbkNvbXBvbmVudCB7XHJcbiAgICAvLyBmYUNoZXZyb25MZWZ0OiBJY29uRGVmaW5pdGlvbiA9IGZhQ2hldnJvbkxlZnQ7XHJcbiAgICAvLyBmYUNoZXZyb25SaWdodDogSWNvbkRlZmluaXRpb24gPSBmYUNoZXZyb25SaWdodDtcclxuICAgIGl0ZW1zOiBBcnJheTxOYXZJdGVtPjtcclxuICAgIGhlYWRlcjogTmF2SGVhZGluZztcclxuICAgIGNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgZGlzcGxheU5hdiA9IGZhbHNlO1xyXG4gICAgZGlzcGxheUZvb3RlciA9IHRydWU7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlnaGxpZ2h0TGlua3MgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbGVmdE5hdlNlcnZpY2U6IExlZnROYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMubGVmdE5hdlNlcnZpY2UuZGlzcGxheUZvb3Rlci5zdWJzY3JpYmUoKGRpc3BsYXk6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Rm9vdGVyID0gZGlzcGxheTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0TmF2U2VydmljZS5pdGVtcy5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxOYXZJdGVtPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TmF2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hdiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdE5hdlNlcnZpY2UuaGVhZGVyLnN1YnNjcmliZSgoaGVhZGVyOiBOYXZIZWFkaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTGlua0FjdGl2ZShpdGVtOiBOYXZJdGVtTGluaykge1xyXG4gICAgICAgIGNvbnN0IGNoYXJQb3MgPSB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpO1xyXG4gICAgICAgIGlmIChjaGFyUG9zID4gLTEgJiYgIWl0ZW0ucXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpdGVtLnF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyUG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWUgPSB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKFtpdGVtLnVybF0sIHsgcXVlcnlQYXJhbXM6IGl0ZW0ucXVlcnlQYXJhbXMgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwuc3RhcnRzV2l0aCh0cmVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xlYW5VcmwgPSBjaGFyUG9zICE9PSAtMSA/IHRoaXMucm91dGVyLnVybC5zbGljZSgwLCBjaGFyUG9zKSA6IHRoaXMucm91dGVyLnVybDtcclxuICAgICAgICByZXR1cm4gY2xlYW5VcmwgPT09IGl0ZW0udXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgICB0aGlzLmxlZnROYXZTZXJ2aWNlLnRvZ2dsZS5lbWl0KHRoaXMuY29sbGFwc2VkKTtcclxuICAgIH1cclxufVxyXG4iXX0=