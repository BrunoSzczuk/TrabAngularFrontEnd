import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeComponent } from './cidade/cidade.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [{ path: 'cidade', component: CidadeComponent }, { path: 'pessoa', component: PessoaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
