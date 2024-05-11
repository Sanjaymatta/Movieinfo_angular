import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  movies:any[]=[];
   count=0;
         constructor(private movieService:SharedService){
          //  this.movies=this.movieService.movies;
           this.movies = this.movieService.movies.filter(movie => movie.trending==true);
         }
        
  
  selectedMovie:any;
  showdetails(moviename:string){
         this.selectedMovie=this.movies.find(x=>x.title===moviename)
  }

}