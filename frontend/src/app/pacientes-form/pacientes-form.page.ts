import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.page.html',
  styleUrls: ['./pacientes-form.page.scss'],
})
export class PacientesFormPage implements OnInit {

  constructor(private pacientesService:PacientesService, private router:Router) { }

  ngOnInit() {
  }

  registrarPaciente(nombre, apellido,cedula,direccion,telefono){
    this.pacientesService.insertarPaciente(nombre.value,apellido.value,cedula.value,direccion.value,telefono.value)
    .subscribe((res) => this.router.navigate(['/pacientes']),(err) =>console.log(err))
  }

}
