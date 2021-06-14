import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/memberSearch',
    title: 'Member Search',
  },
  {
    path: '/providerSearch',
    title: 'Provider Search',
  },
  {
    path: '/groupSearch',
    title: 'Group Search',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  // path = window.location.href.match("memberSearch").index > -1;
  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
