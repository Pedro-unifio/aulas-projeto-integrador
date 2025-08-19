import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteMotriz } from './componente-motriz/componente-motriz';

const routes: Routes = [
  {path: 'componente-motriz', component: ComponenteMotriz}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaValorSomaRoutingModule { }
