import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-motriz',
  standalone: false,
  templateUrl: './componente-motriz.html',
  styleUrl: './componente-motriz.css'
})
export class ComponenteMotriz {

  numero = 0;

  incrementar() {
    this.numero++;
  }

}
