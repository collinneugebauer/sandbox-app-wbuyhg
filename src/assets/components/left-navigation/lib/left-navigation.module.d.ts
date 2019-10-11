import { ModuleWithProviders } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
export declare class LeftNavigationModule {
    constructor(library: FaIconLibrary);
    static forRoot(): ModuleWithProviders;
}
export { NavHeading, NavItem, NavItemType, NavItemLink } from './nav-item.model';
export { LeftNavigationService } from './left-navigation.service';
