import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  //component css element selector
  selector: 'app-heroes',
 //	The location of the component's template file.
  templateUrl: './heroes.component.html',

//styleUrls	The location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']

})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}