import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//put http logic in this service cos I don't want to put it in task.service
//simply to wrap all of my request methods to make it a bit neater 
//and provide a root URL as a constant here and use it in the request then just return observables that these HTTP methods return

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  //import HTTP client within the constructor
  constructor(private http: HttpClient) {
     this.ROOT_URL='http://localhost:3000';
  }

  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri:string, payload:Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }

  patch(uri:string,payload:Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`,payload);
  }

  delete(uri:string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }


}
