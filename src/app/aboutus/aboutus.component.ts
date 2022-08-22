import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
    <div class="paragraph-bigger">About us</div>
    <div class="paragraph-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <hr class="featurette-divider"/>
  `,
  styles: [
    `
    div {
    padding: 20px;
    text-align: center;
    }
    .paragraph-bigger {
      margin-bottom: 20px;
      opacity: 1;
      font-size: 45px;
      font-weight: 500;
    }
    .paragraph-smaller {
      font-size: 30px;
      opacity: 0.6;
    }
    `
  ]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
