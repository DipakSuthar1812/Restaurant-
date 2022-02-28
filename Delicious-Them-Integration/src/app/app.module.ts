import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { BooktableComponent } from './booktable/booktable.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChefsComponent } from './chefs/chefs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    SpecialsComponent,
    EventsComponent,
    BooktableComponent,
    GalleryComponent,
    ChefsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
