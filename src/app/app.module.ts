import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FaceComponent } from './face/face.component';
import { HairComponent } from './hair/hair.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { BodyComponent } from './body/body.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FaceproductsComponent } from './faceproducts/faceproducts.component';
import { BodyproductsComponent } from './bodyproducts/bodyproducts.component';
import { HairproductsComponent } from './hairproducts/hairproducts.component';
import { PerfumeproductsComponent } from './perfumeproducts/perfumeproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    FaceComponent,
    HairComponent,
    PerfumeComponent,
    BodyComponent,
    ProductRegisterComponent,
    ProductFormComponent,
    WelcomeComponent,
    CartComponent,
    AboutComponent,
    UserheaderComponent,
    UserpageComponent,
    FaceproductsComponent,
    BodyproductsComponent,
    HairproductsComponent,
    PerfumeproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
