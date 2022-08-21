import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  pokemonName: string = '';
  pokemonElement: string = '';
  power: number = 0;
  health: number = 0;
  def: number = 0;
  addPokemonStatus: boolean = false;

  profile: { name: string, element: string, skills: { power: number, health: number, def: number } }[] =
    [{
    name: 'Pikachu',
    element: 'Fire',
    skills: {
        power: 280,
        health: 198,
        def: 300
      },
  }];
  constructor() { }

  ngOnInit(): void {
  }

  setProfile() {
    setTimeout(() => {
      this.addPokemonStatus = true;
    }, 4000)
  }

  addPokemon() {
    this.profile.push({
      name: this.pokemonName,
      element: this.pokemonElement,
      skills: {
        power: this.power,
        health: this.health,
        def: this.def,
      }
    });
  }
}
