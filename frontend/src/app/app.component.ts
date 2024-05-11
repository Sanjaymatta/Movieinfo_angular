import { Component ,NgZone} from '@angular/core';
import { SharedService } from './shared.service';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  movies:any[]=[];
  constructor(private movieService:SharedService,private zone:NgZone,private sanitizer:DomSanitizer){
    this.movies=this.movieService.movies;
  }
 
  
}

 

