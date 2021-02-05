import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  // emite eventos especificar tipo, este es el hijo y asi emite al padre
  // que captura el evento en el html del padre entre parentesis curvo

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    console.warn(this.nuevo, 'llego a agregar');
    //this.nuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);


    // this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
