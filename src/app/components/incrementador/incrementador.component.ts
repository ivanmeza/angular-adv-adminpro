import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  // @Input() progreso1: number = 40;
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  // progreso2: number = 35;

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso == 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso == 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(evento: number) {
    if (evento >= 100) {
      this.progreso == 100;
    } else if (evento <= 0) {
      this.progreso == 0;
    } else {
      this.progreso = evento;
    }
    this.valorSalida.emit(evento);
  }
}
