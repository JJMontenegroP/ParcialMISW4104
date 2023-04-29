/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PlantListComponent } from './plant-list.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

const informacionPlantas = [
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
const mockServicioPlanta: {
  obtenerListadoPlantas: () => Observable<Planta[]>;
} = {
  obtenerListadoPlantas: () => of(informacionPlantas),
};

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [{ provide: PlantaService, useValue: mockServicioPlanta }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call obtenerListadoPlantas, obtenerListadoPlantas()', () => {
    const obtenerPlantaSpy = spyOn(mockServicioPlanta, 'obtenerListadoPlantas');
    obtenerPlantaSpy.and.returnValue(of(informacionPlantas));
    component.getInformaciopnPlanta();

    expect(mockServicioPlanta.obtenerListadoPlantas).toHaveBeenCalled();
  });

  // it('should render the table of planta-list component with the size of informacionPlantas mock', async () => {
  //   const tablaDePlantasParaPrueba = document.querySelector('table#testTable');

  //   const plantasEnLaTabla = Array.from(
  //     tablaDePlantasParaPrueba!.getElementsByClassName('mat-row')
  //   );

  //   plantasEnLaTabla.forEach((planta) => {
  //     const id = planta
  //       .getElementsByClassName('mat-column-id')
  //       .item(0).textContent;
  //     const nombre = planta
  //       .getElementsByClassName('mat-column-nombre')
  //       .item(0).textContent;
  //     const tipo = planta
  //       .getElementsByClassName('mat-column-tipo')
  //       .item(0).textContent;
  //     const clima = planta
  //       .getElementsByClassName('mat-column-clima')
  //       .item(0).textContent;

  //     expect(plantaValida).toContain(
  //       jasmine.objectContaining({
  //         id: id,
  //         type: nombre,
  //         nombre: tipo,
  //         size: clima,
  //       })
  //     );
  //   });
  // s});

  // it('should show the columns we expect', () => {
  //   const tablaDePlantasParaPrueba = document.querySelector('table#testTable');

  //   const tableHeaders = Array.from(
  //     tablaDePlantasParaPrueba.getElementsByClassName('mat-header-cell')
  //   );
  //   const headerClasses = [
  //     'mat-column-id',
  //     'mat-column-nombre',
  //     'mat-column-tipo',
  //     'mat-column-clima',
  //   ];

  //   tableHeaders.forEach((header) => {
  //     expect(
  //       headerClasses.some((item) => header.classList.contains(item))
  //     ).toBeTruthy();
  //   });
  // });
});
