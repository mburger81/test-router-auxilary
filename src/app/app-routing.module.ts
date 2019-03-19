import { Comp3Component } from './comp3/comp3.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  },
  {
    path: 'comp1',
    outlet: 'secondary',
    component: Comp1Component
  },
  {
    path: 'comp2',
    outlet: 'secondary',
    component: Comp2Component
  },
  {
    path: 'comp3',
    outlet: 'secondary',
    component: Comp3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
