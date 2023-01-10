import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Header -->
  <app-header></app-header>
  <!-- Headline -->
  <app-headline></app-headline>
  <!-- About US -->
  <app-aboutus></app-aboutus>
  <!-- Experties -->
  <app-experties></app-experties>

  <!-- Home
  <app-home></app-home>
  -->
  <app-contact></app-contact>
  <!-- Contact US 
  -->
  <!-- Footer -->
  <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AppComponent{

  title = 'app';

}
