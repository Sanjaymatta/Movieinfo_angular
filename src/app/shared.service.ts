import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  movies:any[]=[]
  constructor(){
  this.movies=[
    {
      title:"K.G.F 1",
      year:2018,
      rating:8.2,
      trailerid:"fnGW4iQzVLw",
      Director:"Prashanth Neel",
      type:"Movie",
      stars:"Yash,Srinidhi Shetty",
      poster:"https://i.pinimg.com/originals/e1/03/3a/e1033a3d9b662e112e99e62ba2f1cd6f.jpg",
      plot:"In the 1970s, a gangster named Rocky goes undercover as a slave to assassinate the owner of a notorious gold mine known as the K.G.F.",
      runtime:"2h 40m",
      cast:[
          "https://wallpapercave.com/wp/wp6950537.jpg",
          "https://i.pinimg.com/originals/e6/d8/e4/e6d8e40916b041499ebd6f0666df90d8.png"
      ],
      gener:[
        "Action",
        "Crime",
        "Drama"
      ],
      
    },
    {
      title:"RRR",
      year:2022,
      rating:7.8,
      trailerid:"NgBoMJy386M",
      Director:"Raja Mouli",
      type:"Movie",
      stars:"Jr.N.T.R,Ram Charan",
      poster:"https://www.themoviedb.org/t/p/original/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",
      plot:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
      runtime:"3h 7m",
      cast:[
        "https://wallpapercave.com/dwp1x/wp4081930.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.pD9WapFoIW1huhYC_11DtwHaJ4&pid=Api&P=0&h=220",
      ],
      gener:[
           "Action",
           "Drama"
      ]
    },
    {
      title:"Kantara",
      year:2022,
      rating:8.2,
      trailerid:"3L5X46j2t90",
      Director:"Rishab Shetty",
      type:"Movie",
      stars:"Rishab Shetty,Kishore Kumar",
      poster:"https://www.mirchi9.com/wp-content/uploads/2022/10/Kantara_Movie.jpg",
      plot:"When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.",
      runtime:"2h 28m",
      cast:[
        "https://c.saavncdn.com/artists/Rishab_Shetty.jpg",
        "https://th-i.thgim.com/public/incoming/yda67k/article66084915.ece/alternates/FREE_1200/kishore_03.jpg",
      ],
      gener:[
        "Action",
        "Adventure",
        "Drama"
      ]
    },
    {
      title:"The Family Man",
      year:2019+"-",
      rating:7.4,
      trailerid:"NGf_B81Hc2M",
      Director:"Krishna",
      runtime:"10h",
      type:"Web Series",
      stars:"Manoj Bajpayee,Samantha Ruth Prabhu",
      poster:"https://images.indianexpress.com/2021/05/the-family-man-759.jpg",
      plot:"A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
      cast:[
       
         "https://janmatsamachar.com/wp-content/uploads/2020/07/iconic-movies-that-have-made-manoj-bajpayee-one-of-the-best-performers-in-the-film-industry-1200x900-1570626565_1200x900-1068x801.jpg",
         "https://wallpaperaccess.com/full/2592707.jpg",
      ],
      gener:[
          "Action",
          "Comedy",
          "Drama"
        ]
      
    },
    
  ];
}
}
