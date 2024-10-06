import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpVideoclubService {

  constructor(public http: HttpClient) { }

  getFile(url: string){
    return this.http.get(url);
  }
}
