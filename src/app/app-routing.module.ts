import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { FaceComponent } from './face/face.component';
import { HairComponent } from './hair/hair.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'welcome', component:WelcomeComponent},
  {path : 'home', component:HomeComponent},
  {path : 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'contact', component:ContactComponent},
  {path : 'face' , component:FaceComponent},
  {path : 'hair' , component:HairComponent},
  {path : 'perfume' , component:PerfumeComponent},
  {path : 'body' , component:BodyComponent},
  {path : 'productRegister' , component:ProductRegisterComponent},
  {path : 'productForm' , component:ProductFormComponent},
  {path : 'about' , component:AboutComponent},
  {path: 'welcome/contact',component:ContactComponent},
  {path: 'welcome/about',component:AboutComponent},
  {path : 'welcome/face' , component:FaceComponent},
  {path : 'welcome/hair' , component:HairComponent},
  {path : 'welcome/perfume' , component:PerfumeComponent},
  {path : 'welcome/body' , component:BodyComponent},
  {path : 'welcome/home' , component:HomeComponent},
  {path : 'user' , component:UserpageComponent},
  {path : 'welcome/productRegister' , component:ProductRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 