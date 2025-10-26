import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { LowerMainComponent } from '../lower-main/lower-main.component';


interface Emoji {
  emoji1: string;
  emoji2: string;
  emoji3: string;
}

interface MainContent {
  pfp: string;
  username: string;
  name: string;
  description: string;
  img: string;
  likes: string;
  comments: string;
  share: string;
  emojis: Emoji;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,MenuIconComponent,LowerMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  mainContent: MainContent[] = [
    {
      pfp: 'assets/mainImgs/pfp-1.png',
      username: 'thewallart',
      name: 'Lara Leones',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      img: 'assets/mainImgs/card-1.jpg',
      likes: '9.8k',
      comments: '8.6k',
      share: '7.2k',
      emojis: {
        emoji1: 'heart',
        emoji2: 'comment',
        emoji3: 'share',
      },
    },
    {
      pfp: 'assets/mainImgs/pfp-2.jpg',
      username: 'thecustomcreater',
      name: 'Thomas J.',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      img: 'assets/mainImgs/card-2.jpg',
      likes: '9.8k',
      comments: '8.6k',
      share: '7.2k',
      emojis: {
        emoji1: 'heart',
        emoji2: 'comment',
        emoji3: 'share',
      },
    },
  ];
}
