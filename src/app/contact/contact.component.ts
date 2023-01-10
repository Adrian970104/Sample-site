import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container-fluid text-center">    
      <div class="row content">
        <div class="col-sm-2 sidenav"></div>
        <div class="col-sm-8"> 
          <h1>Contact Us!</h1>
          <form class>
            <div class="mb-3">
              <label class="label">Email</label>
              <input type="text" class="form-control" label="email" class="input">
            </div>
            <div class="mb-3">
              <label class="label">Email</label>
              <input type="text" class="form-control" name="name" class="input">
            </div>
            <div class="mb-3">
              <label class="label">Email</label>
              <input type="text" class="form-control" name="name" class="input">
            </div>
          </form>
        </div>     
        <div class="col-sm-2 sidenav"></div>
      </div>
    </div>
    <div class="map w-widget w-widget-map"></div>
    <button class="pretty-button">Click me!</button>
  `,
  styles: [ `
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: lightgrey;
      height: 100%;
    }

    /* Set gray background color and 100% height */
    .row.content {height: 450px}

    .pretty-button {
  background-color: #3f3f3f; /* dark gray */
  color: white;
  padding: 0.5em 1em; /* give some space around the text */
  border-radius: 0.5em; /* make the corners rounded */
  text-transform: uppercase; /* make the text uppercase */
  font-weight: bold; /* make the text bold */
  transition: all 0.2s ease-in-out; /* add a transition effect */
}

.pretty-button:hover {
  background-color: #5f5f5f; /* slightly darker gray on hover */
  transform: scale(1.1); /* scale up the button on hover */
}
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
