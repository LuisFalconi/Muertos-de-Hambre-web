import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';

// Firebase
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';

// Components
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ListaRestaurantesComponent } from './components/restaurantes/lista-restaurantes/lista-restaurantes.component';
import { RestauranteComponent } from './components/restaurantes/restaurante/restaurante.component';
import { UploadFormComponent } from './components/restaurantes/upload-form/upload-form.component';
// servive
import {RestauranteService} from './services/restaurante.service';
import {UploadService } from './services/upload.service';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    ListaRestaurantesComponent,
    RestauranteComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RestauranteService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
