import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'paginaSoma',
    loadChildren: () => import('./pagina-valor-soma/pagina-valor-soma-module').then(m => m.PaginaValorSomaModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
