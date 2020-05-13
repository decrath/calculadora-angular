import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado: string = '';
  botonesLargos: string[] = ['AC', 'CE'];
  botones: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  private valorPrevio: string = '';
  private secuenciaDeValores: string = '';
  
  agregarExpresion(valor: string) {
    if ( this.resultado != '' ) {
      this.valorPrevio = this.secuenciaDeValores;
      this.secuenciaDeValores = valor;
    }

    if (valor == 'AC') {
      this.resultado = '';
    } else if (valor == 'CE') {
      this.resultado = this.valorPrevio != '=' ? this.resultado.slice(0, -1) : this.resultado;
    } else if (valor == '=') {
      this.resultado = eval(this.resultado);
    } else {
      this.resultado += valor;
    }
  }
 

}
