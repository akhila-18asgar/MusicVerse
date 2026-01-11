import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
    constructor(private http:HttpClient){}
    getProducts(){
      return this.http.get("https://696251e5d9d64c7619079069.mockapi.io/songs")
    }
}
