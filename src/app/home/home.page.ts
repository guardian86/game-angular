import { Component } from '@angular/core';
const SIGNOS = ["+","-","*", "/"]
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  primerNumero: number = 0;
  segundoNumero: number = 0;
  signo: string = "+";
  resultado: number = null;
  calificacion: boolean = null;
  //+ - * /
  ngOnInit() {
   this.nuevaOperacion();
  }

  nuevaOperacion() {
    this.primerNumero = Math.floor(this.generarNumeroAleatorio()  * ((10000 - 0 + 1) + 0));
    this.segundoNumero = Math.floor(this.generarNumeroAleatorio()  * ((10000 - 0 + 1) + 0));
    const position = Math.floor(this.generarNumeroAleatorio()  * ((3 - 0 + 1) + 0))
    this.signo = SIGNOS[position];
    this.calificacion = null;
  }

  generarNumeroAleatorio() {
    return Math.random()
  }

  validarResultado() {
    const respuesta = eval(this.primerNumero + this.signo +this.segundoNumero);    
    this.calificacion = respuesta == this.resultado
  }

}
