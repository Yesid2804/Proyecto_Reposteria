import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'app/administracion/models/cliente';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { ClienteService } from 'app/administracion/servicios/cliente.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css'],
  providers: [ClienteService],

})
export class FormClientesComponent implements OnInit {

  templateUrl: 'select-overview-example.html'
  titulo = "Registar Cliente"



  formCliente: Cliente = {
    id: null,
    nombre: '',
    apellido: '',
    ubicacion: '',
    identificacion: '',
    email: ''
  }

  public listCliente: Cliente[] = [];

  form:FormGroup;


  constructor(
    public dialogRef: MatDialogRef<FormClientesComponent>,
    private fb: FormBuilder,
    private _clienteService: ClienteService,


    @Inject(MAT_DIALOG_DATA) public dataModal: any
    ) {
      this.form = this.fb.group({
        id: uuidv4(),
        nombre:['',Validators.required],
        apellido :['',Validators.required],
        ubicacion :['',Validators.required],
        identificacion:['',[Validators.required]],
        email:['',[Validators.required]],
      })
     }

     ngOnInit(): void {
      this.obtenerClientes();
      if(this.dataModal.tipo !== "Agregar" ){
        this.titulo = "Editar cliente"
        this.formCliente =  this.dataModal.cliente;
      } 
    }

  guardarCliente(){
      if(this.dataModal.tipo !== "Agregar" ){
        this._clienteService.updateCliente(this.formCliente.id,this.formCliente).subscribe(data=>{
        this.dataModal.tipo=="Agregar";
      });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cliente editado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this.formCliente.id = uuidv4().number;
        console.log("Aqui:",this.formCliente)
        this.formCliente.identificacion = this.formCliente.identificacion.toString(); 
        this._clienteService.saveCliente(this.formCliente).subscribe(data=>{
          Swal.fire({
            position: 'center',icon: 'success',title: 'Cliente guardado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          console.log("ERROR")
           this.obtenerClientes();
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
  
  obtenerClientes(){
    this._clienteService.getListClientes().subscribe(data =>{
      this.listCliente = data;
    },error =>{
       console.log(error)
    });
  }



  cerrarModal(){
      this.dialogRef.close();
  }

  agregarCliente(){
    console.log();
  }
}
