import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PlantaComponent, PlantListComponent],
  exports: [PlantListComponent],
})
export class PlantaModule {}
