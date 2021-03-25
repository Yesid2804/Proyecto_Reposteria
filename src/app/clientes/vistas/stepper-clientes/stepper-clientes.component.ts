import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Torta Chocolate', weight: 25000, symbol: '2'},
  {position: 2, name: 'Torta de Miel', weight: 30000, symbol: '3'},
  {position: 3, name: 'Torta de frutas', weight: 32000, symbol: '6'},

];

@Component({
  selector: 'app-stepper-clientes',
  templateUrl: './stepper-clientes.component.html',
  styleUrls: ['./stepper-clientes.component.css']
})
export class StepperClientesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


}
