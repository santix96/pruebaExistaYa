import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.sass']
})
export class FullLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
   }

  ngOnInit(): void {
    this.router.navigate(['/1'], { replaceUrl: true });
  }

}
