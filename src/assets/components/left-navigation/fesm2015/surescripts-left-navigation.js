import { EventEmitter, Injectable, NgModule, Output, ɵɵdefineInjectable, Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { noop } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LeftNavigationService {
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
/** @nocollapse */ LeftNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LeftNavigationService_Factory() { return new LeftNavigationService(); }, token: LeftNavigationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LeftNavigationComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavItemIcon {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
/** @enum {string} */
var NavItemType = {
    Link: 'link',
    Heading: 'heading',
    HR: 'hr',
    Function: 'fn',
};
class NavItemLink {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.relative = true;
        this.target = '_self';
        Object.assign(this, init);
    }
}
class NavItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.onClick = noop;
        if (init) {
            init.icon = new NavItemIcon(init.icon);
            if (init.itemType === NavItemType.Function) {
                init.link = undefined;
                init.onClick = init.onClick || noop;
            }
            else if (init.itemType === NavItemType.Link) {
                init.onClick = undefined;
                init.link = new NavItemLink(init.link);
            }
        }
        Object.assign(this, init);
    }
}
class NavHeading {
    /**
     * @param {?=} init
     */
    constructor(init) {
        if (init) {
            init.icon = new NavItemIcon(init.icon);
        }
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LeftNavigationModule {
    /**
     * @param {?} library
     */
    constructor(library) {
        library.addIcons(faChevronLeft, faChevronRight);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LeftNavigationModule,
            providers: [LeftNavigationService]
        };
    }
}
LeftNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FontAwesomeModule, RouterModule],
                declarations: [LeftNavigationComponent],
                exports: [LeftNavigationComponent]
            },] }
];
/** @nocollapse */
LeftNavigationModule.ctorParameters = () => [
    { type: FaIconLibrary }
];

export { LeftNavigationComponent, LeftNavigationModule, LeftNavigationService, NavHeading, NavItem, NavItemLink, NavItemType };
//# sourceMappingURL=surescripts-left-navigation.js.map
