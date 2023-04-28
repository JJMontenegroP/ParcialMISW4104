import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plantas$!: Observable<Planta[]>;

  constructor(private plantaService: PlantaService) {}

  ngOnInit() {
    this.plantas$ = this.plantaService.obtenerListadoPlantas();
  }
}
