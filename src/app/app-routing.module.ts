import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';

import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: ListaPostsComponent },
  { path: '**', redirectTo: 'blog' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'post', component: PostComponent },
  { path: 'blog', component: ListaPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
