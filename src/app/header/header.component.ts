import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-dark navbar-expand-md bg-dark">
        <a class="navbar-brand" href="#">
          <img
            class="img-scale-on-hover"
            src="assets/image/Logo1.png"
            width="100"
            height="80"
          />
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="navbar-item mr-auto">
            <a class="nav-link" href="#"> Rólunk </a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="#"> Szolgáltatások </a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="#"> Kapcsolat </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .navbar-brand {
        padding-left: 10px;
      }
      .navbar-item {
        font-size: 25px;
        padding-left: 10px;
        padding-right: 10px;
      }
      .nav-link:hover {
        transform: scale(1.1);
      }
      .img-scale-on-hover {
        transition: transform 0.2s ease-in-out; /* add a transition effect */
      }

      .img-scale-on-hover:hover {
        transform: scale(1.1); /* scale up the image on hover */
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
