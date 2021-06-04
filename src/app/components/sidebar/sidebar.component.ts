import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/productos', title: 'Productos',  icon: 'cake', class: '' },
    { path: '/clientes', title: 'Clientes',  icon: 'people_alt', class: '' },
    { path: '/domiciliarios', title: 'Domiciliarios',  icon:'delivery_dining', class: '' },
    { path: '/ventas', title: 'Ventas',  icon: 'attach_money', class: '' },
    { path: '/quejas-yreclamos', title: 'Quejas y Reclamos',  icon: 'leaderboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
