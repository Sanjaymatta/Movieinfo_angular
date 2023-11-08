import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { GenersComponent } from './geners/geners.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { GenermoviesComponent } from './genermovies/genermovies.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path:"trending",component:TrendingComponent},
  {path:"geners",component:GenersComponent},
  {path:"home",component:AppComponent},
  {path:"details/:title",component:DetailsComponent},
  {path:"",redirectTo:'',pathMatch:'full'},
  { path: 'genermovies/:genre', component: GenermoviesComponent },
  { path: '', redirectTo: '/genres', pathMatch: 'full' },
  {path:"",component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent={AppComponent,TrendingComponent,GenersComponent,DetailsComponent};
