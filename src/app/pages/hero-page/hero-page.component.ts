import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.sass']
})
export class HeroPageComponent implements OnInit {
  heroes: any = [];
  currentHero: any = {};

  constructor(
    private heroService: HeroService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

   }

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe(
      (response) => {
        this.heroes = response;
        this.heroes.map((hero) => {
          hero['percentage_positive_votes'] = hero.positive_votes * 100 / (hero.positive_votes + hero.negative_votes);
          let currentHeroId = this._Activatedroute.snapshot.paramMap.get("id");
          if (hero.id == currentHeroId) {
            this.currentHero = hero;
          }
        })


        console.log(this.currentHero);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  getImageUrl( hero? ) {
    let bannerUrl = "url(";
    if(hero){
      bannerUrl += hero.url_main_image + ")"
    }else{
      bannerUrl += this.currentHero.url_main_image + ")"
    }
    return bannerUrl;
  }

  goTo(id){
    let url = "/"+id;
    
    this.router.navigate([url], { replaceUrl: true });
  }
}
