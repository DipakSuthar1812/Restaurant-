import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooktableComponent } from './booktable/booktable.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'special',component:SpecialsComponent},
  {path:'event',component:EventsComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'book table',component:BooktableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
