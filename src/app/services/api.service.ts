import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
upload(file) {
  var payload = new FormData();
  payload.append("file", file);
  return this.http.post('https://jsonplaceholder.typicode.com/todos/1',payload);
}
}