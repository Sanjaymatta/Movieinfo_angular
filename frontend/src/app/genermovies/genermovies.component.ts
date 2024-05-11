import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-genermovies',
  templateUrl: './genermovies.component.html',
  styleUrls: ['./genermovies.component.css']
})
export class GenermoviesComponent {
  
  movies:any[]=[];
  constructor(private movieService:SharedService,private route:ActivatedRoute){
    this.movies=this.movieService.movies;
  }
  selectedGener!: string | null;
  zonor:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedGener = params.get('genre');
      
      this.zonor = this.movies.filter(movie => movie.gener.includes(this.selectedGener));
    });
  }
  
  selectedMovie:any;
  showdetails(moviename:string){
         this.selectedMovie=this.movies.find(movie=>movie.title===moviename)
  }
}
