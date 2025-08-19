import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaValorSomaRoutingModule } from './pagina-valor-soma-routing-module';
import { ComponenteMotriz } from './componente-motriz/componente-motriz';


@NgModule({
  declarations: [
    ComponenteMotriz
  ],
  imports: [
    CommonModule,
    PaginaValorSomaRoutingModule
  ]
})
export class PaginaValorSomaModule { }
