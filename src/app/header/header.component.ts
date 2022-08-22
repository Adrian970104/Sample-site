import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <nav class="navbar navbar-dark navbar-expand-md bg-dark">
      <a class="navbar-brand" href="#">
        <img src="assets/image/Logo1.png" width="100" height="80">
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="navbar-item mr-auto">
          <a class="nav-link" href="#">
            Apple
          </a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">
            Pear
          </a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">
            Orange
          </a>
        </li>
      </ul>
    </nav>
  </header>
    `,
  styles: [
    `
    .navbar-brand{
      padding-left: 10px;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
