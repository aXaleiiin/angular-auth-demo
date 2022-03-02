import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private authHttp: AuthHttp, private http: HttpClient) {}

  getOrders() {
    return this.http.get('/api/orders').pipe(map((response) => response));
  }
}
