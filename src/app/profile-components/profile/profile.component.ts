import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: { name: string, element: string, skills: {power: number, health: number, def: number}}[] = [{
    name: 'Pikachu',
    element: 'Fire',
    skills: 
      {
        power: 280,
        health: 198,
        def: 300
      },
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
