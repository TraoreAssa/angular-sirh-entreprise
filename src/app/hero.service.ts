import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messagesService : MessagesService) { }

  // getHeroes():Hero[] {
  //   return HEROES;
  // }

  getHeroes():Observable<Hero[]> {
    this.messagesService.add('HeroService: Super je les ai trouvé');
    return of (HEROES);
  }

  getHero(id:number) : Observable<Hero>{
    this.messagesService.add('HeroService: Super je l\'ai trouvé');

    return of(HEROES.find(hero => hero.id === id));
  }


}
