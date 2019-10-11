import { NavItem, NavHeading, NavItemLink } from './nav-item.model';
import { LeftNavigationService } from './left-navigation.service';
import { Router } from '@angular/router';
export declare class LeftNavigationComponent {
    private leftNavService;
    private router;
    items: Array<NavItem>;
    header: NavHeading;
    collapsed: boolean;
    displayNav: boolean;
    displayFooter: boolean;
    highlightLinks: boolean;
    constructor(leftNavService: LeftNavigationService, router: Router);
    isLinkActive(item: NavItemLink): boolean;
    toggle(): void;
}
