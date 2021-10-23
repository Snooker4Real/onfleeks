import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth/auth.guard";
import {TvShowsViewComponent} from "./views/tv-shows-view/tv-shows-view.component";
import {NewTvShowViewComponent} from "./views/new-tv-show-view/new-tv-show-view.component";
import {SingleTvShowViewComponent} from "./views/single-tv-show-view/single-tv-show-view.component";
import {EditTvShowViewComponent} from "./views/edit-tv-show-view/edit-tv-show-view.component";
import {AuthViewComponent} from "./views/auth-view/auth-view.component";
import {ErrorViewComponent} from "./views/error/error-view.component";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: TvShowsViewComponent},
  {path: 'home', canActivate: [AuthGuard], component: TvShowsViewComponent},
  {path: 'tv-shows/new', canActivate: [AuthGuard], component: NewTvShowViewComponent},
  {path: 'tv-shows/:id', canActivate: [AuthGuard], component: SingleTvShowViewComponent},
  {path: 'tv-shows/:id/edit', canActivate: [AuthGuard], component: EditTvShowViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
