import { Component, OnInit } from '@angular/core';
import { Hero } from '../sect';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css' ]
})
export class LoginFormComponent implements OnInit {
  powers = ['Sunni', 'Shia',
  'Wahabi', 'Ahmadi', 'Quranist'];

  model = new Hero(18, 'Muhammad', this.powers[0], 'Islam');

 submitted = false;
 onSubmit() { this.submitted = true; }

 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.model); }

 newHero() {
  this.model = new Hero(42, '', '');
 }

 MUHAMMAD(): Hero {
  const myHero =  new Hero(42, 'MUHAMMAD',
                         'Fetch any object at any distance',
                         'Leslie Rollover');
  console.log('My hero is called ' + myHero.name); 
  return myHero;
 }
  showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; 
 }


  constructor() { }

  ngOnInit(): void {
  }

}
