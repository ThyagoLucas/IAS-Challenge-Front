import { Component, OnInit } from '@angular/core';
import { Login } from '../account.model';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDatas: Login;

  constructor(private accountService:AccountService, private router:Router) {
    this.loginDatas={
      email:'',
      password:''
    }
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.loginDatas);
      this.router.navigate([''])
    } catch (error) {
      console.log(error);  
      }
  }

  register():void{
    this.router.navigate(['/create-account']);
  }

}
