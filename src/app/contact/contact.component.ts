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
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
