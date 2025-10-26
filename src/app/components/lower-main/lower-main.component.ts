import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LowerContent {
  title: string;
  img: string;
  price: string;
  star: string;
}

@Component({
  selector: 'app-lower-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lower-main.component.html',
  styleUrl: './lower-main.component.css',
})
export class LowerMainComponent {
  content: LowerContent[] = [
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-1.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-2.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-3.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-4.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-1.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-2.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-3.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
    {
      title: 'Modern Wall Decor Framed Painting',
      img: 'assets/lowerMainContent/img-4.png',
      price: '199.99',
      star: 'assets/sidebarIcons/star.svg',
    },
  ];
}
