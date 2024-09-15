import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {
  private apiUrl = 'https://cat-fact.herokuapp.com/facts';
  constructor(private client: HttpClient) { }
  getHelloword():Observable<any>{
    return this.client.get(this.apiUrl)
  }
}
