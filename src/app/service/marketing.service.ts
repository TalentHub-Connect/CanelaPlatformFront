import { Injectable } from '@angular/core';
import { PerfilDto } from '../model/perfil-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MarketingDto} from "../model/marketing-dto";
import {Marketingstatus} from "../model/marketingstatus";

@Injectable({
  providedIn: 'root',
})
export class MarketingService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<MarketingDto[]>("https://canelamarketingmicroservice-qa.up.railway.app/possibleclient/list");
  }

  findAllStatuses() {
    return this.http.get<Marketingstatus[]>("https://canelamarketingmicroservice-qa.up.railway.app/marketingstatus/list");
  }

  saveAll(empresas: MarketingDto[]) {
    return this.http.post<MarketingDto[]>("https://canelamarketingmicroservice-qa.up.railway.app/possibleclient/saveAll", empresas);
  }

  saveStatus(estado: Marketingstatus) {
    return this.http.post<Marketingstatus>("https://canelamarketingmicroservice-qa.up.railway.app/marketingstatus/save", estado);
  }

  delete(id: number) {
    return this.http.delete(`https://canelamarketingmicroservice-qa.up.railway.app/marketingstatus/delete/${id}`);

  }
}
