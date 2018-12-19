import { Component, OnInit, Input } from '@angular/core';
import{ Hero } from '../hero';
import{ HeroService } from '../hero.service';

import{ Location } from '@angular/common';
import{ ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero : Hero;

  constructor( private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
  .subscribe(hero => this.hero = hero);
  }

  geBack(): void{
    this.location.back();
  }
}