import { Component, OnInit } from '@angular/core';
import{ Mensaje } from '../model/mensaje';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent, CommonModule, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent implements OnInit {
    mensajeria: Mensaje[]=[];
    ngOnInit(): void {
      this.mensajeria = [
        {
          autor: 'Pepe',
          texto: 'Hola María',
          hora: new Date(),
        },
        {
          autor: 'María',
          texto: 'Hola Pepe',
          hora: new Date(),
        },
      ];
    }
    Limpiar(){
        this.mensajeria = [];
    }
    


}
