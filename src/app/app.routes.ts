import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ShopComponent } from './components/shop/shop.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PanelCardsComponent } from './components/panel-cards/panel-cards.component';
import { PhotographersComponent } from './components/photographers/photographers.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: MainComponent,     canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'shop', component: ShopComponent,     canActivate: [AuthGuard],
  },
  {
    path: 'conversation',
    component: ConversationComponent,
    canActivate: [AuthGuard],
  },
  { path: 'wallet', component: WalletComponent,     canActivate: [AuthGuard],
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'artists',
    component: PanelCardsComponent,
    outlet: 'rightPanel',
    canActivate: [AuthGuard],
  },
  {
    path: 'photographers',
    component: PhotographersComponent,
    outlet: 'rightPanel',
    canActivate: [AuthGuard],
  },
  { path: '**', component: LoginComponent }, // Wildcard route for handling unknown routes
];
