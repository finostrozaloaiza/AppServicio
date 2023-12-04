import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
