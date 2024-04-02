import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
  
export class ProductosComponent implements OnInit {

  products: Products[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Products[]>('http://localhost:3000/products')
      .subscribe(data => {
        this.products = data;
      });
  }
}

