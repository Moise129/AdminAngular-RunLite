import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/admins/log-in/log-in.component';
import { RegisterComponent } from './components/admins/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/admins/home/home.component';
import { NavComponent } from './components/page-sections/nav/nav.component';
import { FooterComponent } from './components/page-sections/footer/footer.component';
import { NotFoundComponent } from './components/page-sections/not-found/not-found.component';
import { AuthFirebaseService } from './services/auth-firebase/auth-firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { TravelComponent } from './components/admins/travel/travel.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    TravelComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    AuthFirebaseService
    ,NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
