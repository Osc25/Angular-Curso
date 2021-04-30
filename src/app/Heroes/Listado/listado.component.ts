import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
    heroes: string[] = ['IronMan', 'SpiderMan', 'Hulk', 'Thor', 'Venom'];
    
    eliminado: string='';
    
    borrarHeroe(){
      
      this.eliminado = this.heroes.shift() || '';

    }


}
