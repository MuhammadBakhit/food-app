import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { 
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
