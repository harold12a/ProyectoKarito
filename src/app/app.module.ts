import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { SedesComponent } from './sedes/sedes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Sedes', component: SedesComponent},
  {path: 'Servicios', component: ServiciosComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Contabilidad', component: ContabilidadComponent},
  {path: 'Ingreso', component: IngresoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ProductosComponent,
    SedesComponent,
    ContactoComponent,
    ContabilidadComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
