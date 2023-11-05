import { Component ,OnInit} from '@angular/core';
import { AppComponent } from '../app.component';
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
  selectedMovie: any; // Assuming you have a data structure for movie details

  
  constructor(private route: ActivatedRoute,private movieService:SharedService) {
    this.movies=this.movieService.movies;
  }
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieTitle = params.get('title') ?? null; // Use null as a default if 'title' is not provided
      if (this.movieTitle !== null) {
        this.selectedMovie= this.movies.find(movie => movie.title === this.movieTitle);

        // Fetch movie details for the given movieTitle from your data source
        // Assign the details to this.movieDetails
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



 