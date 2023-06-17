import { Component } from '@angular/core';


@Component({
  //component css element selector
  selector: 'app-heroes',
 //	The location of the component's template file.
  templateUrl: './heroes.component.html',

//styleUrls	The location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']

})

export class HeroesComponent {
  hero = 'Windstorm';
}
