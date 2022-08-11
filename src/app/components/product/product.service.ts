import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'
import { Product, SucessDelete } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = 'https://ias-challenge.herokuapp.com';

  token = window.localStorage.getItem('token') as string;

  headers = new HttpHeaders({'token':this.token});

  constructor( private snackbar : MatSnackBar,private http: HttpClient  ) { }
  
  showMessage(msg:string):void{
    this.snackbar.open(msg,'x', {
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      
    })
  }

  create(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/create`, product, {headers:this.headers}  )
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/allProducts`,{headers:this.headers});
  }

  readById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/productById/${id}`, {headers:this.headers});
  }

  updateStock(productId:string, newStock:string):Observable<Product>{
    return this.http.patch<Product>(`${this.baseUrl}/stockUpdate/${productId}/${newStock}`,{},{headers:this.headers} )
  }
  delete(productId: string): Observable<SucessDelete>{
    
    return this.http.delete<SucessDelete>(`${this.baseUrl}/productDelete/${productId}`, {headers:this.headers});
  }
}
