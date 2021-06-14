import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/memberSearch',
    title: 'Member Search',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: '',
  },
  {
    path: '/providerSearch',
    title: 'Provider Search',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: '',
  },
  {
    path: '/groupSearch',
    title: 'Group Search',
    rtlTitle: 'خرائط',
    icon: 'icon-pin',
    class: '',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems: any[];
  constructor() {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
