import { Component ,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  movies:any[]=[];
  movieTitle!: string | null;
 
  selectedMovie: any; 

  
  constructor(private route: ActivatedRoute,private movieService:SharedService) {
    this.movies=this.movieService.movies;
  }
  

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.movieTitle = params.get('title') ?? null; 
      if (this.movieTitle !== null) {
        this.selectedMovie= this.movies.find(movie => movie.title === this.movieTitle);

        
      }
    });
    
  }
  
  
 
 hovered(){
  const myDiv=document.getElementById('myDiv');
  myDiv?.style.setProperty('opacity','1');
 }
 unhovered(){
  const myDiv=document.getElementById('myDiv');
  myDiv?.style.setProperty('opacity','0');
 }
}



 