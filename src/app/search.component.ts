import { Component } from '@angular/core';
import { LeftNavigationService, NavItem, NavHeading, NavItemType } from '../assets/components/left-navigation';

@Component({
  selector: 'surescripts-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  title = 'surescripts';
  displayNav = false;
  collapsed = false;

  private leftNavHeading: NavHeading = {
    icon: { name: 'user-md', prefix: 'fas' },
    title: 'With Left Nav'
  };

  private leftNavItems: Array<NavItem> = [
    new NavItem({
      text: 'Search', id: 'provider-location-search',
      itemType: NavItemType.Link, icon: { prefix: 'fas', name: 'search' },
      link: { url: '/search' }
    }),
    new NavItem({
      text: 'Search Deeper', id: 'provider-location-create',
      itemType: NavItemType.Link, icon: { prefix: 'fas', name: 'search' },
      link: { url: '/search/1' }
    }),
    new NavItem({
      text: 'Query Params', id: 'provider-location-create',
      itemType: NavItemType.Link, icon: { prefix: 'fas', name: 'search' },
      link: { url: '/search/1', queryParams: {'asdf': '1'} }
    }),
    new NavItem({
      text: 'Query Params 2', id: 'provider-location-create',
      itemType: NavItemType.Link, icon: { prefix: 'fas', name: 'search' },
      link: { url: '/search/1', queryParams: {'asdf': '2'} }
    }),
    new NavItem({
      text: 'External Link', id: 'provider-location-create',
      itemType: NavItemType.Link, icon: { prefix: 'fas', name: 'search' },
      link: { url: 'http://google.com', relative: false, target: '_blank' }
    }),
    new NavItem({
      text: 'Callback', id: 'provider-location-callback',
      itemType: NavItemType.Function, icon: { prefix: 'fas', name: 'user-plus' },
      onClick: function($event: any) {
          alert('leftnav clicked');
      }
    })
];

  constructor(private leftNavService: LeftNavigationService) {
    this.leftNavService.init(this.leftNavHeading, this.leftNavItems);
  }
}
