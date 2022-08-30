import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  img: string [] = [
    '../../assets/img/img-pokemon-01.jpg',
    '../../assets/img/img-pokemon-02.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
