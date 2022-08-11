import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router:Router) { 
                this.product = {
                  id:0,
                  name:'',
                  price:0,
                  stock:0
                }
              }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId') as string;

    this.productService.readById(productId).subscribe(product =>{
      this.product = product;
    })
  }

  delete(): void{
    const productId = this.route.snapshot.paramMap.get('productId') as string;
    this.productService.delete(productId).subscribe(()=>{
      this.productService.showMessage('produto excluido com sucesso');
      this.router.navigate(['/products']);
    })
  }

  cancel():void{
    this.router.navigate(["/products"])
  }


}
