import { Component } from '@angular/core';
import { Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  movies:any[]=[];
  constructor(private moviesService:SharedService){
    this.movies=this.moviesService.movies;
  }
  
  
  searchInput:string='';
  resultMovies:any[]=[];
  search(){
    
    this.resultMovies = this.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
  s1(){
    const my=document.getElementById('nodata');
    my?.style.setProperty('opacity','1');
  }
  selectedMovie:any;
  showdetails(moviename:string){
         this.selectedMovie=this.movies.find(movie=>movie.title===moviename)
  }
}
