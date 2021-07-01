import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UsersService } from 'app/administracion/servicios/users.service';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }
  hide = true;

  username = ''
  pass = ''
  // email = new FormControl('', [Validators.required, Validators.email]);
  // pass = new FormControl('', [Validators.required]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  login(){
    const data = {
        username: this.username,
        password: this.pass
    }
    this.usersService.login(data).subscribe(res => 
      {
        console.log(res)
      })
  }

}
