import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vod-2024';

  /*** Declaring the variables in TypeScript**/
  personSurname = '';
   /*** Declaring the variables in TypeScript to String only, 
    * it will only take String value all the time**/
  personName : String = 'Humphrey';


}
