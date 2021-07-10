import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './services/heroes.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterPipe,
    FooterComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
