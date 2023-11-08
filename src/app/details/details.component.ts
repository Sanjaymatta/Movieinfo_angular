import { Component ,OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
// implements {ActivatedRoute}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  movies:any[]=[];
  movieTitle!: string | null;
  trailerid!:string | null;
  selectedMovie: any; // Assuming you have a data structure for movie details

  
  constructor(private route: ActivatedRoute,private movieService:SharedService,private sanitizer:DomSanitizer) {
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



 