import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galleria } from '../models/Galleria';

@Injectable({
  providedIn: 'root'
})
export class GalleriaService {

  constructor(private http: HttpClient) { }

  getImages() {
  return this.http.get<any>('assets/Jsons/jsonGalleria.json')
    .toPromise()
    .then(res => <Galleria[]>res.data)
    .then(data => { return data; });
  }
}
