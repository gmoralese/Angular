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

  constructor(private heroesService: HeroesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.setForm();
    this.getAllHeroes();
    this.myForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public setForm(): void {}

  public getAllHeroes(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res.data;
      console.log(this.heroes);
      this.myForm.get('email').setValue(this.heroes[0].nombre);
    });
  }

  public doSomething = () => {
    console.log('HOla');
  };
}
