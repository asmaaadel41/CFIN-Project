import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  { path: "shared", loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: "user", loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
