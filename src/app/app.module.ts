import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { TvShowViewComponent } from './views/tv-shows-view/tv-show-view.component';
import { EditTvShowViewComponent } from './views/edit-tv-show-view/edit-tv-show-view.component';
import { ErrorViewComponent } from './views/error/error-view.component';
import { NewTvShowViewComponent } from './views/new-tv-show-view/new-tv-show-view.component';
import { SingleTvShowViewComponent } from './views/single-tv-show-view/single-tv-show-view.component';
import { TvShowFormComponent } from './components/tv-show-form/tv-show-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    TvShowViewComponent,
    EditTvShowViewComponent,
    ErrorViewComponent,
    NewTvShowViewComponent,
    SingleTvShowViewComponent,
    TvShowFormComponent,
    ErrorsFormComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
