import { Component, OnInit } from '@angular/core';

//Service

import { RestauranteService } from '../../../services/restaurante.service';
import {ToastrService} from 'ngx-toastr'
// Class
import { Restaurante } from '../../../models/restaurante';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css']
})
export class ListaRestaurantesComponent implements OnInit {

  restauranteList: Restaurante[];

  constructor(
    private restauranteService: RestauranteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.restauranteService.getRestaurant().snapshotChanges()
    .subscribe(item => {
      this.restauranteList = [];
      item.forEach(element => {
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         this.restauranteList.push(x as Restaurante);
      });
    }); 
  }

  onEdit(restaurante: Restaurante){
    if(confirm('¿Estas seguro de querer editar el restaurante?')){
      this.restauranteService.selectedRestaurant = Object.assign({}, restaurante);
      //this.toastr.success('Operacion Realizada', 'Restaurante editado')
    }
    

  }

  onDelete($key: string){
    if(confirm('¿Estas seguro de querer eliminar el restaurante?')){
      this.restauranteService.deleteRestaurant($key);
      this.toastr.success('Operacion Realizada', 'Restaurante eliminado')
    }

  }

}
