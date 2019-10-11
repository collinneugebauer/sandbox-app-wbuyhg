import { EventEmitter } from '@angular/core';
import { NavItem, NavHeading } from './nav-item.model';
export declare class LeftNavigationService {
    items: EventEmitter<Array<NavItem>>;
    toggle: EventEmitter<boolean>;
    header: EventEmitter<NavHeading>;
    displayFooter: EventEmitter<boolean>;
    collapsed: boolean;
    init(header?: NavHeading, items?: Array<NavItem>, displayFooter?: boolean): void;
}
