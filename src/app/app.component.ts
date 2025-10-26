import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    SidebarComponent,
    SearchComponent,
    RightPanelComponent,
    CommonModule,
    SignupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  title = 'frontend';
  isLoggedIn: string = 'false';

  constructor() {}

  ngDoCheck(): void {
    this.isLoggedIn = String(localStorage.getItem('isLoggedIn'));
  }
}
