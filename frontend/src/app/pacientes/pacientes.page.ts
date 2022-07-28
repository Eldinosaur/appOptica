import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  pacientes: any = []

  constructor(private pacientesService:PacientesService, private alertController:AlertController) { }

  ngOnInit():void {
    this.cargarPacientes()
  }
  ionViewWillEnter(){
    this.cargarPacientes()
  }

  cargarPacientes(){
    this.pacientesService.obtenerPacientes().subscribe(res =>{
      this.pacientes = res
      console.log(res)
    },err => console.log(err))
  }
  async eliminarPaciente(id){
    const alert = await this.alertController.create({
      header:"Eliminar Paciente",
      message:"Desea eliminar el paciente?",
      buttons:[
        {
          text:'Ok',
          handler:()=>{
            this.pacientesService.eliminarPaciente(id).subscribe(res => this.cargarPacientes(),err => console.log(err));
          },
        },'Cancelar',
      ],
    });
    alert.present()    
  }

}
