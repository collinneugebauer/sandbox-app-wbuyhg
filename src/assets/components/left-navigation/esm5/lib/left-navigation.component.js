/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LeftNavigationService } from './left-navigation.service';
import { Router } from '@angular/router';
var LeftNavigationComponent = /** @class */ (function () {
    function LeftNavigationComponent(leftNavService, router) {
        var _this = this;
        this.leftNavService = leftNavService;
        this.router = router;
        this.collapsed = false;
        this.displayNav = false;
        this.displayFooter = true;
        this.highlightLinks = true;
        this.leftNavService.displayFooter.subscribe(function (display) {
            _this.displayFooter = display;
        });
        this.leftNavService.items.subscribe(function (items) {
            if (items && items.length > 0) {
                _this.items = items;
                _this.displayNav = true;
            }
            else {
                _this.displayNav = false;
            }
        });
        this.leftNavService.header.subscribe(function (header) {
            if (header) {
                _this.header = header;
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    LeftNavigationComponent.prototype.isLinkActive = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var charPos = this.router.url.indexOf('?');
        if (charPos > -1 && !item.queryParams) {
            return false;
        }
        else if (item.queryParams) {
            if (charPos === -1) {
                return false;
            }
            /** @type {?} */
            var tree = this.router.createUrlTree([item.url], { queryParams: item.queryParams });
            return this.router.url.startsWith(tree.toString());
        }
        /** @type {?} */
        var cleanUrl = charPos !== -1 ? this.router.url.slice(0, charPos) : this.router.url;
        return cleanUrl === item.url;
    };
    /**
     * @return {?}
     */
    LeftNavigationComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.collapsed = !this.collapsed;
        this.leftNavService.toggle.emit(this.collapsed);
    };
    LeftNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'surescripts-left-navigation',
                    template: "<nav class=\"sidebar\" [ngClass]=\"collapsed ? 'collapsed' : ''\" *ngIf=\"displayNav\">\r\n  <div class=\"sidebar-header\" *ngIf=\"header\">\r\n      <h1 [title]=\"header.title\">\r\n          <i class=\"icon\" *ngIf=\"header?.icon\">\r\n              <fa-icon [fixedWidth]=\"true\" [icon]=\"[header.icon.prefix, header.icon.name]\" *ngIf=\"header?.icon\" [size]=\"collapsed ? '1x' : '2x'\"></fa-icon>\r\n          </i> <span>{{header.title}}</span>\r\n      </h1>\r\n  </div>\r\n  <div class=\"sidebar-body\" [ngClass]=\"{'no-footer': !displayFooter, 'no-header': !header }\">\r\n      <ul class=\"nav flex-column\" *ngIf=\"items && items.length > 0\">\r\n          <li [class.active]=\"highlightLinks && item?.link?.relative ? isLinkActive(item.link) : false\" class=\"nav-item\" *ngFor=\"let item of items; let i = index\">\r\n            <a *ngIf=\"item.itemType === 'fn'\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" (click)=\"item?.onClick($event)\" href=\"javascript:void(0);\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <a *ngIf=\"item.itemType === 'link' && !item?.link?.relative\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\" [target]=\"item.link.target\" [href]=\"item.link.url\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <a *ngIf=\"item.itemType === 'link' && item?.link?.relative\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" class=\"nav-link\" [id]=\"'left-navlink-'+ item.id\" [title]=\"header && header.title ? header.title + ' ' + item.text : item.text\" [target]=\"item.link.target\" [routerLink]=\"[item.link.url]\" [queryParams]=\"item.link.queryParams\">\r\n                <fa-icon *ngIf=\"item?.icon\" [fixedWidth]=\"true\" [icon]=\"[item.icon.prefix, item.icon.name]\"></fa-icon> <span class=\"text\">{{item.text}}</span>\r\n            </a>\r\n            <hr *ngIf=\"item.itemType === 'hr'\" />\r\n            <h4 *ngIf=\"item.itemType === 'heading'\" [ngClass]=\"collapsed ? 'pl-3' : 'pl-4'\" [id]=\"item.id\">{{item.text}}</h4>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n  <div class=\"sidebar-footer\" *ngIf=\"displayFooter\">\r\n      <div class=\"toggle collapse\" (click)=\"toggle()\"  title=\"Collapse Left Navigation\" id=\"leftnav-collapse\">\r\n          <fa-icon [icon]=\"['fas', 'chevron-left']\"></fa-icon> <fa-icon [icon]=\"['fas', 'chevron-left']\"></fa-icon>\r\n      </div>\r\n      <div class=\"toggle expand\" (click)=\"toggle()\" title=\"Expand Left Navigation\" id=\"leftnav-expand\">\r\n          <fa-icon [icon]=\"['fas', 'chevron-right']\"></fa-icon> <fa-icon [icon]=\"['fas', 'chevron-right']\"></fa-icon>\r\n      </div>\r\n  </div>\r\n</nav>\r\n"
                }] }
    ];
    /** @nocollapse */
    LeftNavigationComponent.ctorParameters = function () { return [
        { type: LeftNavigationService },
        { type: Router }
    ]; };
    LeftNavigationComponent.propDecorators = {
        highlightLinks: [{ type: Input }]
    };
    return LeftNavigationComponent;
}());
export { LeftNavigationComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdXJlc2NyaXB0cy9sZWZ0LW5hdmlnYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGVmdC1uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFHLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQWlCdEMsaUNBQW9CLGNBQXFDLEVBQVUsTUFBYztRQUFqRixpQkFtQkM7UUFuQm1CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOakYsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEtBQUssQ0FBQztRQUNuQixxQkFBZ0IsSUFBSSxDQUFDO1FBQ3JCLHNCQUNpQixJQUFJLENBQUM7UUFHbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZ0I7WUFDekQsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBcUI7WUFDdEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUMzQjtTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWtCO1lBQ3BELElBQUksTUFBTSxFQUFFO2dCQUNSLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2FBQ3hCO1NBQ0osQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRU0sOENBQVk7Ozs7Y0FBQyxJQUFpQjs7UUFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QixJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUM7YUFDaEI7O1lBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7O1FBRUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0RixPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7OztJQUdqQyx3Q0FBTTs7O0lBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ25EOztnQkF4REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLGtvR0FBK0M7aUJBQ2xEOzs7O2dCQVBRLHFCQUFxQjtnQkFFcEIsTUFBTTs7O2lDQWNYLEtBQUs7O2tDQWxCVjs7U0FVYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdkl0ZW0sIE5hdkhlYWRpbmcsIE5hdkl0ZW1MaW5rIH0gZnJvbSAnLi9uYXYtaXRlbS5tb2RlbCc7XHJcbmltcG9ydCB7IExlZnROYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vbGVmdC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCwgSWNvbkRlZmluaXRpb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyAgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdXJlc2NyaXB0cy1sZWZ0LW5hdmlnYXRpb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xlZnQtbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExlZnROYXZpZ2F0aW9uQ29tcG9uZW50IHtcclxuICAgIC8vIGZhQ2hldnJvbkxlZnQ6IEljb25EZWZpbml0aW9uID0gZmFDaGV2cm9uTGVmdDtcclxuICAgIC8vIGZhQ2hldnJvblJpZ2h0OiBJY29uRGVmaW5pdGlvbiA9IGZhQ2hldnJvblJpZ2h0O1xyXG4gICAgaXRlbXM6IEFycmF5PE5hdkl0ZW0+O1xyXG4gICAgaGVhZGVyOiBOYXZIZWFkaW5nO1xyXG4gICAgY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICBkaXNwbGF5TmF2ID0gZmFsc2U7XHJcbiAgICBkaXNwbGF5Rm9vdGVyID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBoaWdobGlnaHRMaW5rcyA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsZWZ0TmF2U2VydmljZTogTGVmdE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0TmF2U2VydmljZS5kaXNwbGF5Rm9vdGVyLnN1YnNjcmliZSgoZGlzcGxheTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlGb290ZXIgPSBkaXNwbGF5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnROYXZTZXJ2aWNlLml0ZW1zLnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PE5hdkl0ZW0+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlOYXYgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TmF2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0TmF2U2VydmljZS5oZWFkZXIuc3Vic2NyaWJlKChoZWFkZXI6IE5hdkhlYWRpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMaW5rQWN0aXZlKGl0ZW06IE5hdkl0ZW1MaW5rKSB7XHJcbiAgICAgICAgY29uc3QgY2hhclBvcyA9IHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICAgICAgaWYgKGNoYXJQb3MgPiAtMSAmJiAhaXRlbS5xdWVyeVBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ucXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoYXJQb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJlZSA9IHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoW2l0ZW0udXJsXSwgeyBxdWVyeVBhcmFtczogaXRlbS5xdWVyeVBhcmFtcyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRyZWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbGVhblVybCA9IGNoYXJQb3MgIT09IC0xID8gdGhpcy5yb3V0ZXIudXJsLnNsaWNlKDAsIGNoYXJQb3MpIDogdGhpcy5yb3V0ZXIudXJsO1xyXG4gICAgICAgIHJldHVybiBjbGVhblVybCA9PT0gaXRlbS51cmw7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xyXG4gICAgICAgIHRoaXMubGVmdE5hdlNlcnZpY2UudG9nZ2xlLmVtaXQodGhpcy5jb2xsYXBzZWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==