import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="container-fluid text-center">
      <p class="">
        <a href="#">
          Back to top
        </a>
      </p>
        <p>Made By Angular</p>
    </footer>
  `,
  styles: [ `
    /* Set black background color, white text and some padding */
    footer {
      background-color: #212529;
      color: white;
      padding: 15px;
    }

    footer a{
      color: lightblue;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
