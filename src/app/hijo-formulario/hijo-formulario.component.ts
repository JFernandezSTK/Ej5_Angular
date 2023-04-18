import { Component,Output,EventEmitter } from '@angular/core';
import { pedido } from '../_modelo/pedido';


@Component({
  selector: 'app-hijo-formulario',
  templateUrl: './hijo-formulario.component.html',
  styleUrls: ['./hijo-formulario.component.css']
})
export class HijoFormularioComponent {
  @Output() EnviaDato:EventEmitter<pedido[]>=new EventEmitter<pedido[]>() 
  lista:pedido[]
  idPedido:number
  idCliente:number
  nombreCliente:string
  totalProductos:number
  importe:number

  constructor(){
    this.lista=[]
    this.idPedido=0
    this.idCliente=0
    this.nombreCliente=""
    this.totalProductos=0
    this.importe=0
  }

  anadir(){
    this.lista.push(new pedido(this.idPedido,this.idCliente,this.nombreCliente,this.totalProductos,this.importe))
    this.idPedido++
    this.idCliente++
    this.EnviaDato.emit(this.lista)
  }
}
