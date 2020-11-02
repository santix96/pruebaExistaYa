import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPageComponent } from './hero-page.component';
import { HeroPageRoutingModule } from './hero-page-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [HeroPageComponent],
  imports: [
    CommonModule,
    HeroPageRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule
    
  ]
})
export class HeroPageModule { }
