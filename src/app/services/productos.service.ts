import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  addItem(productData: Products): Observable<any> {
    return this.http.post<Products>(this.apiUrl, productData);
  }

}
