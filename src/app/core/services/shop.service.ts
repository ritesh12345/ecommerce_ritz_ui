import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Pagination } from '../../shared/models/Pagination';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
http = inject(HttpClient);
baseUrl = 'https://localhost:5001/api/'

getProducts(){
  return this.http.get<Pagination<Product>>(this.baseUrl + 'products?pageSize=20');
}
}
