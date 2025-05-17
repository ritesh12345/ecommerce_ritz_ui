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
types : string[] = [];
brands : string[] = [];

getProducts(){
  return this.http.get<Pagination<Product>>(this.baseUrl + 'products?pageSize=20');
}

getTypes(){
  if(this.types.length > 0) return;
return this.http.get<string[]>(this.baseUrl + 'products/types').subscribe(
  {
    next : response => this.types = response
  }
)
}

getBrands(){
if(this.brands.length > 0) return;
return this.http.get<string[]>(this.baseUrl + 'products/brands').subscribe(
  {
    next : response => this.brands = response
  }
)
}
}
