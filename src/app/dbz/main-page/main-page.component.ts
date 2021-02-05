import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: 'Maestro',
    poder: 1100
  }

  // agregarNuevoPersonaje(per: Personaje): void {
  //   // debugger;
  //   console.warn('LLEGO CON EL EVENTO EL NUEVO PESONAJE', per);

  //   this.personajes.push(per);
  // }

  // inyecto la dependencia al servicio en el constructor
  // (private dbzService: DbzService)
  constructor() {
    // this.personajes = this.dbzService.personajes;
  }



}
