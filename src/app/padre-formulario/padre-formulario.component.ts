import { Component } from '@angular/core';
import { producto } from '../_modelo/producto';
import { tipo } from '../_modelo/tipos';

@Component({
  selector: 'app-padre-formulario',
  templateUrl: './padre-formulario.component.html',
  styleUrls: ['./padre-formulario.component.css']
})
export class PadreFormularioComponent {
  lista: producto[]
  id:number
  nombre:string
  cantidad:number
  precio:number
  tipo:tipo
  tipos:string[]

  constructor(){
    this.lista=[]
    this.id=0
    this.nombre=""
    this.cantidad=0
    this.precio=0
    this.tipo=tipo.alimento
    this.tipos=Object.values(tipo)
  }

  anadir(){
    this.lista.push(new producto(this.id,this.nombre,this.cantidad,this.precio,this.tipo))
    this.id++
  }
}
