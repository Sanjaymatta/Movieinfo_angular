import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geners',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.css']
})
export class GenersComponent {
  constructor(private router: Router) {}

  selectedGener(genre: string) {
    this.router.navigate(['/genermovies', genre]);
  }
}
