import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './Vehiculo';
import { VehiculosServiceService } from '../VehiculosService.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private VehiculosService: VehiculosServiceService) { }

  ngOnInit(): void {
    this.getVehiculo();
  }

  vehiculos: Vehiculo[] = [];

  nuevoVehiculo: Vehiculo ={
    id:'',
    patente:'',
    descripcion:'',
    servicios:0,
    estado:false
  }
 
  public async getVehiculo(){
    try{
      this.vehiculos = await this.VehiculosService.getVehiculo();
      console.log(this.vehiculos)
    }catch(error){
      console.log(error);
    }


  }

  public async postVehiculo(){
    try{
      await this.VehiculosService.postVehiculo(this.nuevoVehiculo);
    }catch(error){
      console.log(error);
    }



  }

}
