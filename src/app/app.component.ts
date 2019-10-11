import { Component } from '@angular/core';
import { LeftNavigationService, NavItem, NavHeading, NavItemType } from '../assets/components/left-navigation';

@Component({
  selector: 'surescripts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surescripts';
  displayNav = false;
  collapsed = false;

  constructor(private leftNavService: LeftNavigationService) {
    this.collapsed = this.leftNavService.collapsed;
    this.leftNavService.items.subscribe((items: Array<NavItem>) => {
        this.displayNav = items && items.length > 0;
    });
    this.collapsed = this.leftNavService.collapsed;
    this.leftNavService.toggle.subscribe((collapsed: boolean) => {
        this.collapsed = collapsed;
    });
  }
}
