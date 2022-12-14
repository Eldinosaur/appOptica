import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Post{
  id?:string;
  nombre: string;
  apellido: string;
  cedula:string;
  direccion:string;
  telefono:string;
}

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http:HttpClient) { }
  API = "http://localhost:1337/tbl-pacientes"

  obtenerPacientes(){ 
    return this.http.get(this.API)
   }
  
  obtenerPaciente(id:string){
    return this.http.get(`${this.API}/${id}`)
  }

  insertarPaciente(nombre:string,apellido:string,cedula:string,direccion:string,telefono:string){
    return this.http.post(this.API,{
      nombre,apellido,cedula,direccion,telefono
    })
  }

  actualizarPaciente(id:string,post:Post){
    return this.http.put(`${this.API}/${id}`,post)
  }

  eliminarPaciente(id:string){
    return this.http.delete(`${this.API}/${id}`)
  }
}
