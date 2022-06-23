import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PixapiService {

  constructor(private http: HttpClient) { }

  getData(filter: number|string){
    let url: string = 'https://pixabay.com/api/?key=27334193-a8c4d8a5e3ba2120c2c11dff1&q=' + filter;
    console.log(url);
    return this.http.get(url);
  }
}
