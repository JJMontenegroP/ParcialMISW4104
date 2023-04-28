import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planta } from './planta';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class PlantaService {
  constructor(private httpClient: HttpClient) {}

  obtenerListadoPlantas() {
    return this.httpClient.get<Planta[]>(environment.apiUrl);
  }
}
