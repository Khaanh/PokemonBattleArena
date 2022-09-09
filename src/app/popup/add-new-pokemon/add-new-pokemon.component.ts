import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-new-pokemon',
  templateUrl: './add-new-pokemon.component.html',
  styleUrls: ['./add-new-pokemon.component.scss']
})
export class AddNewPokemonComponent implements OnInit {
  modalToggle: boolean = false;

  toggleModal() {
    this.modalToggle == false ? this.modalToggle = true : this.modalToggle = false;
    // this.modalToggle = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
