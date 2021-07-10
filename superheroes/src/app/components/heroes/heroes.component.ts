import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes: any;
  public errorAlert = false;
  public checkboxValue: boolean;
  public numberId: string;
  public supArray: any;
  public filterHeroes = '';
  public showList = false;

  constructor(private heroesService: HeroesService) {
    this.checkboxValue = false;
  }

  ngOnInit() {
    this.getAllHeroes();
  }

  public getAllHeroes(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }

  public searchHeroe(checkboxValue, numberId): void {
    this.supArray = [];
    if (numberId > 0 && numberId < 6) {
      this.errorAlert = false;
      this.showList = true;
      this.heroesService.getHero(numberId).subscribe((data: any) => {
        this.supArray.push(data.data);
      });

      for (const hero of this.heroes.data) {
        if (hero.puedeVolar === checkboxValue) {
          this.supArray.push(hero);
        }
      }

      // reset inputs.
      this.checkboxValue = false;
      this.numberId = '';
    } else {
      this.errorAlert = true;
    }
  }
}
