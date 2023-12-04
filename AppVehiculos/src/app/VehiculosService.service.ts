import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculos/Vehiculo';


@Injectable({
  providedIn: 'root'
})
export class VehiculosServiceService {

  pb = new PocketBase('http://127.0.0.1:8090');

constructor(private http: HttpClient) { }


async getVehiculo(): Promise<Vehiculo[]>{
  const vehiculo:Vehiculo[] = await this.pb.collection('vehiculos').getFullList();
  return vehiculo;
}


async postVehiculo(data: Vehiculo):Promise<void>{
  await this.pb.collection('vehiculos').create(data);
  }

async updateVehiculo(data:Vehiculo): Promise<void>{
  await this.pb.collection('vehiculos').update(data.id, data);
}

async deleteVehiculo(data: Vehiculo): Promise<void>{
  await this.pb.collection('vehiculos').delete(data.id);
}
}
