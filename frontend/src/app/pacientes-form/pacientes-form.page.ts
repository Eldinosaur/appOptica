import { Component, OnInit } from '@angular/core';
import { PacientesService, Post } from '../services/pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.page.html',
  styleUrls: ['./pacientes-form.page.scss'],
})
export class PacientesFormPage implements OnInit {
  edit = false;
  post: any ={
    nombre:"",
    apellido: "",
    cedula: "",
    direccion: "",
    telefono:""
  }

  constructor(private pacientesService:PacientesService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit() {
    this.active.paramMap.subscribe((paramMap)=>{
      if(paramMap.get('id')){
        this.edit= true;
        this.pacientesService.obtenerPaciente(paramMap.get('id'))
        .subscribe((res)=> {
          this.post = res;
          console.log(this.post)
        });
      }
    });
  }

  registrarPaciente(){
    this.pacientesService.insertarPaciente(this.post.nombre,this.post.apellido,this.post.cedula,this.post.direccion,this.post.telefono)
    .subscribe((res) => 
    this.router.navigate(['/pacientes']),
    (err) =>console.log(err))
  }
  
  actualizarPaciente(){
    this.pacientesService.actualizarPaciente(this.post.id,{
      nombre: this.post.nombre,
      apellido:this.post.apellido,
      cedula:this.post.cedula,
      direccion:this.post.direccion,
      telefono:this.post.telefono
    }).subscribe(res=> {
      this.router.navigate(['/pacientes'])
    })
     }

}
