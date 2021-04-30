import { Component } from "@angular/core";



@Component({

    selector: 'app-Heroe',
    templateUrl: 'Heroe.component.html'


})

export class HeroeComponent{

    nombre: string = 'IronMan';
    edad:   number = 54 

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
        
    }

    cambiarEdad(): void{
        this.edad = 27;
  
    }
}