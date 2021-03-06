import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// services
import { NewReleasesSpotifyService } from './services/new-releases-spotify.service';

// pipes

// npm packages
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { CardSpotifyComponent } from './components/card-spotify/card-spotify.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { LoadingComponent } from './components/share/loading/loading.component';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    CardSpotifyComponent,
    NoImagePipe,
    LoadingComponent,
    SafeDomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    NewReleasesSpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
