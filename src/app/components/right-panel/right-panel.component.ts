import { Component } from '@angular/core';
import { PanelCardsComponent } from '../panel-cards/panel-cards.component';
import { CommonModule } from '@angular/common';
import { PhotographersComponent } from '../photographers/photographers.component';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [PanelCardsComponent ,CommonModule, PhotographersComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css',
})
export class RightPanelComponent {
  activeLink: string = 'artists';

  setActiveLink(link: string) {
    this.activeLink = link;
    console.log("ActiveLink: ",this.activeLink);
  }
}
