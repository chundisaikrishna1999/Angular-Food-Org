import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.css'],
})
export class CriticsComponent implements OnInit {
  critics = [
    {
      id: 1,
      name: 'Johncena',
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      description: 'Known as Strong man',
    },
    {
      id: 2,
      name: 'virat Kohli',
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      description: 'Cricket player',
    },
    {
      id: 3,
      name: 'Robert downrney',
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      description: 'Stand up comedian',
    },
    {
      id: 4,
      name: 'chris evens',
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      description: 'Dancer cum pop singer',
    },
    {
      id: 5,
      name: 'Sam bullocks',
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      description: 'Aminations designer',
    },
    {
      id: 6,
      name: 'ching chong',
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      description: 'Ping pong player',
    },
    {
      id: 7,
      name: 'Bill Gates',
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      description: 'Founder of MicroSoft',
    },
    {
      id: 8,
      name: 'Loki',
      image: "https://randomuser.me/api/portraits/men/27.jpg",
      description: 'Actor',
    },
    {
      id: 9,
      name: 'Starworld',
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      description: 'Occupational Therapist',
    },
    {
      id: 10,
      name: 'christopher Nolan',
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      description: 'Movie Director',
    },
  ];

  public criticQuery:string="";
  constructor() {}

  ngOnInit(): void {}
}
