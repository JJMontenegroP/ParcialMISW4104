/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PlantListComponent } from './plant-list.component';

const informaciónPlantas = [
  {
    id: 1,
    nombre_comun: 'Lengua de vaca',
    nombre_cientifico: 'Sansevieria Trifasciata',
    tipo: 'Interior',
    altura_maxima: 140,
    clima: 'Templado, cálido',
    sustrato_siembra:
      'Tierra orgánica con buen drenaje, arena, cascarilla de arroz',
  },
  {
    id: 2,
    nombre_comun: 'Chachafruto',
    nombre_cientifico: 'Schefflera actinophylla',
    tipo: 'Exterior',
    altura_maxima: 1000,
    clima: 'Todos',
    sustrato_siembra: 'Sustrato para huerto',
  },
  {
    id: 3,
    nombre_comun: 'Espatifilo',
    nombre_cientifico: 'Spathiphyllum Wallasii',
    tipo: 'Interior',
    altura_maxima: 65,
    clima: 'Templado, cálido',
    sustrato_siembra: 'Tierra orgánica',
  },
];

interface Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
}
class mockServicioPlanta {
  obtenerListadoPlantas(): Observable<any[]> {
    return of(informaciónPlantas);
  }
}

describe('PlantListComponent', () => {
  let service: mockServicioPlanta;
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [{ useValue: mockServicioPlanta }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call obtenerListadoPlantas, obtenerListadoPlantas()', () => {
    service.obtenerListadoPlantas().subscribe((Planta) => {
      // expect(Planta.length).toBe(3);
    });
  });
});
