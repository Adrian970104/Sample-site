import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  template: `
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="overlay-image" style="background-image:url(assets/image/02a.jpg);"></div>
          <div class="container">
            <h1>FirstPage</h1>
            <p>Text text text</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="overlay-image" style="background-image:url(assets/image/01a.jpg);"></div>
          <div class="container">
            <h1>SecondPage</h1>
            <p>Text text text</p>
          </div>
        </div>
        <div class="carousel-item">
        <div class="overlay-image" style="background-image:url(assets/image/Constr_organic_2.jpg);"></div>
          <div class="container">
            <h1>ThirdPage</h1>
            <p>Text text text</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .carousel-item {
      height: 52em;
      background: #777;
      color: white;
      position: relative;
    }
    .container {
      position: absolute;
      bottom:0;
      left:0;
      right:0;
      padding-bottom:50px;
    }
    .overlay-image {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0px;
      background-position: center;
      background-size: cover;
    }
    `
  ],
})
export class HeadlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
