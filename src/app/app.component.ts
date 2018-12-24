import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isotope-layout';

  ngOnInit(){
    //This is just setTimeout not for use.
    const numbers = timer(1000);
    numbers.subscribe(() => {
      console.log("Start now")
    });
  }
}
