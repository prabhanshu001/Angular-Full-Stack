import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from 'client/app/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from 'client/app/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('client/app/layouts/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ),

        // 'client/app/layouts/admin-layout/admin-layout.module#AdminLayoutModule',
        //client\app\layouts\admin-layout\admin-layout.module.ts
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/auth-layout/auth-layout.module').then(
            (m) => m.AuthLayoutModule
          ),
        //  './layouts/auth-layout/auth-layout.module#AuthLayoutModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
