import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface SidebarItem {
  title: string;
  icon: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  
  sidebarData: SidebarItem[] = [
    { title: 'Home', icon: 'home', isActive: false },
    {
      title: 'Notifications',
      icon: 'notification',
      isActive: false,
    },
    { title: 'Shop', icon: 'shop', isActive: false },
    {
      title: 'Conversation',
      icon: 'conversation',
      isActive: false,
    },
    { title: 'Wallet', icon: 'wallet', isActive: false },
    {
      title: 'Subscription',
      icon: 'subscription',
      isActive: false,
    },
    { title: 'My Profile', icon: 'profile', isActive: false },
    { title: 'Settings', icon: 'settings', isActive: false },
  ];

  onClick(){
    localStorage.removeItem('isLoggedIn');
  }
}


