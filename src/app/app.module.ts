import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { GalleryAlbumComponent } from './gallery-album/gallery-album.component';
import { GalleryPhotoComponent } from './gallery-photo/gallery-photo.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { AwardComponent } from './award/award.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    GalleryAlbumComponent,
    GalleryPhotoComponent,
    SwiperComponent,
    ContactComponent,
    HomeComponent,
    SweetalertComponent,
    AwardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
