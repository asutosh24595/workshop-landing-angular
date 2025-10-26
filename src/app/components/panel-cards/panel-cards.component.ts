import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PanelCards {
  name: string;
  img: string;
  profilePic: string;
}

@Component({
  selector: 'app-panel-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-cards.component.html',
  styleUrl: './panel-cards.component.css',
})
export class PanelCardsComponent {
  panelImages: PanelCards[] = [
    {
      name: 'Thomas Edward',
      img: 'assets/panelImages/img-1.png',
      profilePic: "assets/panelProfileImgs/img-1.png",
    },
    {
      name: 'Chris Doe',
      img: 'assets/panelImages/img-2.png',
      profilePic: "assets/panelProfileImgs/img-2.png",
    },
    {
      name: 'Emilie Jones',
      img: 'assets/panelImages/img-3.png',
      profilePic: "assets/panelProfileImgs/img-3.png",
    },
    {
      name: 'Jessica Williams',
      img: 'assets/panelImages/img-4.png',
      profilePic: "assets/panelProfileImgs/img-4.png",
    },
    {
      name: 'Raul Pinto',
      img: 'assets/panelImages/img-5.png',
      profilePic: "assets/panelProfileImgs/img-5.jpg",
    },
    {
      name: 'Alfred Smith',
      img: 'assets/panelImages/img-6.jpg',
      profilePic: "assets/panelProfileImgs/img-6.jpg",
    },
    {
      name: 'Sarah Jones',
      img: 'assets/panelImages/img-7.jpg',
      profilePic: "assets/panelProfileImgs/img-7.jpg",
    },
    {
      name: 'Karen Wong',
      img: 'assets/panelImages/img-8.jpg',
      profilePic: "assets/panelProfileImgs/img-8.jpg",
    },
  ];
}
