import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'where', loadChildren: './where/where.module#WherePageModule' },
  { path: 'ask', loadChildren: './ask/ask.module#AskPageModule' },







];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
