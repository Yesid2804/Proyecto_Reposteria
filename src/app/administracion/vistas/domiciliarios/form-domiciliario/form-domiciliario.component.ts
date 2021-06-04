import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Domiciliario } from 'app/administracion/models/domiciliario';
import { DomiciliarioService } from 'app/administracion/servicios/domiciliario.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form-domiciliario',
  templateUrl: './form-domiciliario.component.html',
  styleUrls: ['./form-domiciliario.component.css'],
  providers: [DomiciliarioService],

})
export class FormDomiciliarioComponent implements OnInit {
  templateUrl: 'select-overview-example.html'
  titulo = "Registar domiciliario"

  formDomiciliario: Domiciliario = {
    id: null,
    nombre: '',
    apellido: '',
    identificacion : '',
    salario: null,
  }

  public listDomiciliario: Domiciliario[] = [];

  form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormDomiciliarioComponent>,
    private _domiciliarioService: DomiciliarioService,
    private fb: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public dataModal: any
    ) { 
      this.form = this.fb.group({
        id: uuidv4(),
        nombre:['',Validators.required],
        apellido :['',Validators.required],
        identificacion :['',Validators.required],
        salario:['',[Validators.required]],
      })
    }

  ngOnInit(): void {
    this.obtenerDomiciliarios();
    if(this.dataModal.tipo !== "Agregar" ){
      this.titulo = "Editar Domiciliario"
      this.formDomiciliario =  this.dataModal.domiciliario;
    }
  }

  agregarDomiciliario(){
  }

  cerrarModal(){
      this.dialogRef.close();
  }

  obtenerDomiciliarios(){
    this._domiciliarioService.getListDomiciliarios().subscribe(data =>{
      this.listDomiciliario = data;
    },error =>{
       console.log(error)
    });
  }

  guardarDomiciliario(){
    if(this.dataModal.tipo !== "Agregar"){
        this._domiciliarioService.updateDomiciliario(this.formDomiciliario.id,this.formDomiciliario).subscribe(data=>{
        this.dataModal.tipo=="Agregar";
      });
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Domiciliario editado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.formDomiciliario.id = uuidv4().number;
      this.formDomiciliario.identificacion = this.formDomiciliario.identificacion.toString(); 
      this._domiciliarioService.saveDomiciliario(this.formDomiciliario).subscribe(data=>{
        Swal.fire({
          position: 'center',icon: 'success',title: 'Producto guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
         this.obtenerDomiciliarios();
      }, error=>{
        console.log(console.error);   
        Swal.fire({
          position: 'center',icon: 'error',title: 'Ocuurio un Error',
          showConfirmButton: false,
          timer: 1500
        });
      })
    }
    this.dialogRef.close();
  }
}