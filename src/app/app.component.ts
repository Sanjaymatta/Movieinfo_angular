import { Component ,NgZone} from '@angular/core';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:any[]=[];
  constructor(private movieService:SharedService,private zone:NgZone){
    this.movies=this.movieService.movies;
  }
  
  ngOnInit() {}
  
}

 

