import { NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var M: any; // Declara M para que TypeScript lo reconozca

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'] // Cambié "styleUrl" a "styleUrls" para corregir el error
})
export class ConvertidorComponent implements AfterViewInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
 
  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  convertir(){
    switch(this.tengo){
      case 'USD': 
      if(this.quiero === 'USD'){
        this.total = this.cantidad
      }
      if(this.quiero === 'EUR'){
        this.total = this.cantidad * 0.84
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * 0.75
      }
      break;
      case 'EUR': 
      if(this.quiero === 'EUR'){
        this.total = this.cantidad
      }
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.20
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * 0.9
      }
      break;
      case 'LIBRA': 
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad
      }
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.33
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * 1.11
      }
      break;
    }
  }
  ngAfterViewInit() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }
}
