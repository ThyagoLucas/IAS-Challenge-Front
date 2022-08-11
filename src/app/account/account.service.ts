import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCreate } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://ias-challenge.herokuapp.com'
  constructor(private http: HttpClient, private snackbar : MatSnackBar) { }

  async login(user:any){

    const result = await this.http.post<any>(`${this.baseUrl}/login`, user).toPromise();

    if(result && result.token){
      window.localStorage.setItem('token', result.token);
      return true;
    }

    return false;
    
  }

  createAccount(user:User):Observable<UserCreate>{
    return this.http.post<UserCreate>(`${this.baseUrl}/register`, user);
  }

  showMessage(msg:string):void{
    this.snackbar.open(msg,'x', {
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      
    })
  }
  
}
