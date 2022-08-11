import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService:ProductService,
              private router:Router,
              private route:ActivatedRoute) {
              
    this.product = {id:0,
                    name:'',
                    price:0,
                    stock:0} 
  
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('productId') as string;
    this.productService.readById(id).subscribe(product =>{
      this.product = product;
     
    })
  }

  cancel():void{
    this.router.navigate(["/products"])
  }

  update():void{
    const productId = this.route.snapshot.paramMap.get('productId') as string;
    const newStock = this.product.stock;

    this.productService.updateStock(productId, String(newStock)).subscribe(product =>{
      this.productService.showMessage('Estoque atualizado com sucesso!');
      this.router.navigate(['/products'])
    })

  }

}
