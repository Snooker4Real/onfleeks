import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TvShowModel} from "../../models/tv-show.model";
import {TvShowsService} from "../../services/tv-shows/tv-shows.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tv-show-view',
  templateUrl: './tv-shows-view.component.html',
  styleUrls: ['./tv-shows-view.component.css']
})
export class TvShowsViewComponent implements OnInit, OnDestroy {

  tvShowsSubs: Subscription;
  tvShows: Array<TvShowModel>;


  constructor(private tvShowsService: TvShowsService) {
    this.tvShows = [];
    this.tvShowsSubs = new Subscription();
  }

  ngOnInit(): void {
    this.tvShowsSubs = this.tvShowsService
      .tvShows
      .subscribe(tvShows => {
        console.log(tvShows);
        this.tvShows = tvShows;
      });
  }

  ngOnDestroy(): void {
    this.tvShowsSubs.unsubscribe();
  }

}
