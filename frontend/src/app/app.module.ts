import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { GenersComponent } from './geners/geners.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { GenermoviesComponent } from './genermovies/genermovies.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    GenersComponent,
    DetailsComponent,
    GenermoviesComponent,
    DefaultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
