import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app-routing.module.ts
import { AuthGuard } from 'path-to-your/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // ...
];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  