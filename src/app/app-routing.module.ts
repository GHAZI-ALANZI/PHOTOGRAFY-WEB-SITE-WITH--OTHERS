import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardComponent } from './award/award.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryAlbumComponent } from './gallery-album/gallery-album.component';
import { GalleryPhotoComponent } from './gallery-photo/gallery-photo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path:"contact", component: ContactComponent
},{
  path:"about", component: AboutComponent
},{
  path:"register", component: RegisterComponent
},{
  path:"login", component: LoginComponent
},{
  path:"gallery", component: GalleryAlbumComponent
},{
  path:"photos/:filter",component: GalleryPhotoComponent
},{
  path:"award", component: AwardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
