import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experties',
  template: `
    <div class="grid-container">
      <div class="grid-item">
        <img class="experties-icon" src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc0291bc4a389c517cea76_Icon%201.svg" width="50"/>
        <div class="paragraph-bigger">Title</div>
        <div class="paragraph-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
      <div class="grid-item">
        <img class="experties-icon" src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc0291bc4a389c517cea76_Icon%201.svg" width="50"/>
        <div class="paragraph-bigger">Title</div>
        <div class="paragraph-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
      <div class="grid-item">
        <img class="experties-icon" src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc0291bc4a389c517cea76_Icon%201.svg" width="50"/>
        <div class="paragraph-bigger">Title</div>
        <div class="paragraph-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    <hr class="featurette-divider"/>
  `,
  styles: [
  `
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 50px;
  }
  .grid-item {
    padding: 20px;
    font-size: 30px;
    text-align: left;
  }
  .paragraph-bigger {
    margin-bottom: 10px;
    opacity: 1;
    font-weight: 500;
  }
  .paragraph-smaller {
      opacity: 0.6;
  }
  .experties-icon {
    margin-bottom: 30px;
}
  `
  ],
})
export class ExpertiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
