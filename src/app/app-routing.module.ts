import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './layout/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [

  {path:'', component:HomeComponent,children:[
  
  { path:'products',component:ProductCrudComponent },
  { path:'products/create',component:ProductCreateComponent },
  { path:'products/stockUpdate/:productId',component:ProductUpdateComponent },
  { path:'products/delete/:productId',component:ProductDeleteComponent }

  ], canActivate:[AuthGuard]},
    
  {
    path:'', component:AuthenticationComponent, children:[
      {path:'', redirectTo:'login',pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'create-account', component:CreateAccountComponent}

    ]
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
