import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';


const routes: Routes = [
  { path: '',      component: SearchPageComponent },
  { path: 'home',  component: SearchPageComponent },
  { path: '**',    component: SearchPageComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
