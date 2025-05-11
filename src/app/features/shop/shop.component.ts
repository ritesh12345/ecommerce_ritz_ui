import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { Product } from '../../shared/models/product';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-shop',
  imports: [MatCard],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
products : Product[] = [];
  private shopService = inject(ShopService);
 ngOnInit(): void {
  this.shopService.getProducts().subscribe(
    {
      next : x=> this.products = x.data,
      error : e=>console.log(e),
      complete : ()=> console.log('Complete!')
    }
   )
 }
}
