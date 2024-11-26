import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRafflesResolver } from '../../core/resolvers/client-raffles.resolver';

const routes: Routes = [
  {
    path: 'raffle/:id',
    loadComponent: () => import('./components/pages/landing/landing.component').then(c => c.LandingComponent),
    resolve: {
      raffle: ClientRafflesResolver
    }
  },
  {
    path: 'payment',
    loadComponent: () => import('./components/pages/payment/payment.component').then(c => c.PaymentComponent),

  },
  {
    path: 'raffle-management',
    loadComponent: () => import('./components/pages/landing/raffle-management/raffle-management.component').then(c => c.RaffleManagementComponent)
  },
  {
    path: 'raffle-creation',
    loadComponent: () => import('./components/pages/landing/raffle-creation/raffle-creation.component').then(c => c.RaffleCreationComponent)
  },
  {
    path: 'raffle-dashboard',
    loadComponent: () => import('./components/pages/landing/raffle-dashboard/raffle-dashboard.component').then(c => c.RaffleDashboardComponent)
  }
  ,
  {
    path: 'raffle-landing',
    loadComponent: () => import('./components/pages/landing/raffle-landing/raffle-landing.component').then(c => c.RaffleLandingComponent)
  },
  {
    path: 'landing-raffle',
    loadComponent: () => import('./components/pages/landing/landing-raffle/landing-raffle.component').then(c => c.LandingRaffleComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/pages/landing/login/login.component').then(c => c.LoginComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
