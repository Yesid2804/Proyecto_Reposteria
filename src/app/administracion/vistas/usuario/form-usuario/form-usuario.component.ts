import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from 'app/administracion/servicios/users.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  constructor(
    private router:Router,
    private usersService: UsersService
    ){}

  ngOnInit(): void {
  }

  nombre: string='';
  clave: string='';
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  
  

  verificarUsuario(){
      const data = {
          username: this.nombre,
          password: this.clave
      }
      this.usersService.login(data).subscribe(res => 
        {
          localStorage.setItem('token', res.token)
            this.router.navigate(['productos']);
        }, error =>{
          console.log(error.error)
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: error.error.message,
              showConfirmButton: false,
              timer: 1500
            })
        })
    // if (this.nombre=="admin" && this.clave=="123") {
    //   this.router.navigate(['productos']);
      
    // }else{
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'warning',
    //     title: 'Credenciales Incorrectas',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }
  }

  canActivate(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login/login']);
      return false;
    }
  }

}
