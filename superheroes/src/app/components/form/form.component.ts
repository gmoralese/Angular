import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public heroes: any;
  public myForm: FormGroup;
  public profileForm = new FormGroup({
    name: new FormControl(''),
    realName: new FormControl(''),
    habilities: new FormGroup({
      1: new FormControl(''),
      2: new FormControl(''),
      3: new FormControl(''),
    }),
  });

  constructor(private heroesService: HeroesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.setForm();
    this.getAllHeroes();
  }

  public setForm(): void {}

  public getAllHeroes(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res.data;
      console.log(this.heroes);
      this.profileForm.get('name').setValue(this.heroes[0].nombre);
      this.profileForm.get('realName').setValue(this.heroes[0].nombreReal);
      //Esto se podria ver como refactorizar y usar un .map
      this.profileForm.patchValue({
        habilities: {
          1: this.heroes[0].habilidades[0],
          2: this.heroes[0].habilidades[1],
          3: this.heroes[0].habilidades[2],
        },
      });
    });
  }

  public onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
