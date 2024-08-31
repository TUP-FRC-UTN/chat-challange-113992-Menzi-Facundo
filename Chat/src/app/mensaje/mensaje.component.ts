import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mensaje } from '../model/mensaje';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  @Output() mensaje = new EventEmitter<Mensaje>();
  @Input() autor = '';
  msj: Mensaje = {
    autor: '',
    texto: '',
    hora: new Date(),
  };
  Enviar() {
    this.msj.autor = this.autor;
    this.msj.texto = this.msj.texto;
    this.msj.hora = new Date();
    this.mensaje.emit(this.msj);
  }

}
