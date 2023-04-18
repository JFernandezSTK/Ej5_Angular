import { Component } from '@angular/core';
import { pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-padre-lista',
  templateUrl: './padre-lista.component.html',
  styleUrls: ['./padre-lista.component.css']
})
export class PadreListaComponent {
  lPadre:pedido[]=[]

  recibeDatos(pedido:pedido[]){
    this.lPadre=pedido
  }
}
