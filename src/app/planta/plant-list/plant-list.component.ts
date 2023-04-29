import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plantas$!: Observable<Planta[]>;
  totalTipoInterior: number = 0;
  totalTipoExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  getInformaciopnPlanta() {
    this.plantas$ = this.plantaService.obtenerListadoPlantas();
  }

  contarTiposDePlantas() {
    this.plantas$.pipe(first()).subscribe((plantas) => {
      plantas.forEach((planta) => {
        if (planta.tipo === 'Interior') {
          this.totalTipoInterior++;
        } else {
          this.totalTipoExterior++;
        }
      });
    });
  }

  ngOnInit() {
    this.getInformaciopnPlanta();
    this.contarTiposDePlantas();
  }
}
