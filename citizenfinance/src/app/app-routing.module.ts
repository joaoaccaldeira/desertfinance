import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { faq } from './faq';

const routes: Routes = [
  {
    path: '/faq', component: faq
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
