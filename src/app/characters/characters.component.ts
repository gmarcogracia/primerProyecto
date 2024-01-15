import { CHARACTERS } from './../mock-characters';
import { Component } from '@angular/core';
import { Character } from '../character';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  characters = CHARACTERS
}
