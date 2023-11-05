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
         constructor(private movieService:SharedService){
           this.movies=this.movieService.movies;
         }
         
  
  selectedMovie:any;
  showdetails(moviename:string){
         this.selectedMovie=this.movies.find(x=>x.title===moviename)
  }

}