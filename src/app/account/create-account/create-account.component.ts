import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user: User;
  constructor(private router: Router,
     
    private accounService: AccountService) { 
    this.user = {
      name:'',
      email:'',
      password:''

    }
  }

  ngOnInit(): void {
  }

  register():void{
    this.accounService.createAccount(this.user).subscribe(msg=>{
      if(msg.msg === 'created'){
        this.accounService.showMessage('usuario cadastrado')
        this.router.navigate(['/login'])
      }
      else{
        this.accounService.showMessage('falha, tente novamente!')
      }
    })
  }

  cancel():void{
    this.router.navigate(['/login']);
  }
}
