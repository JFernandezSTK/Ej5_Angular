import { Component,Input } from '@angular/core';
import { producto } from '../_modelo/producto';

@Component({
  selector: 'app-hijo-lista',
  templateUrl: './hijo-lista.component.html',
  styleUrls: ['./hijo-lista.component.css']
})
export class HijoListaComponent {
  @Input() lHijo:producto[]

  constructor(){
    this.lHijo=[]
  }
}
