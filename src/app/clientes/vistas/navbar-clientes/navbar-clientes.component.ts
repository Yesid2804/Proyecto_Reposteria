import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar-clientes',
  templateUrl: './navbar-clientes.component.html',
  styleUrls: ['./navbar-clientes.component.css']
})
export class NavbarClientesComponent implements OnInit {
  ruta: string
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ruta = this.router.url
    console.log(this.router.url);
  }

  
  

}
