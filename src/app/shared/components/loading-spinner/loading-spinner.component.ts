import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: `
   .spinner-container {
    align-items: center;
    background-color: #000;
    border-radius: 2rem;
    bottom: 1rem;
    color: #fff;
    display: flex;
    padding: 2px 10px;
    line-height: 1;
    position: fixed;
    right: 1rem;
    box-shadow: 0 0 5px rgb(0 0 0 / 30%);
    font-size: .75em;
    gap: .5em;
   }
  `
})
export class LoadingSpinnerComponent {

}
