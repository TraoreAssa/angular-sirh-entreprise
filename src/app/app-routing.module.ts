import { NgModule } from '@angular/core';
import { HeroesComponent} from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes : Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch:'full'}

  //barre d'outil

];

@NgModule({
  // declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
    // CommonModule

})
export class AppRoutingModule { }
