import { Component, OnInit } from '@angular/core';
import {TvShowModel} from "../../models/tv-show.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TvShowsService} from "../../services/tv-shows/tv-shows.service";

@Component({
  selector: 'app-edit-tv-show-view',
  templateUrl: './edit-tv-show-view.component.html',
  styleUrls: ['./edit-tv-show-view.component.css']
})
export class EditTvShowViewComponent implements OnInit {

  tvShow: TvShowModel | undefined;

  constructor(private route: ActivatedRoute,
              private tvShowsService: TvShowsService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.tvShowsService
      .getTvShowById(id)
      .then((tvShowFound: TvShowModel) => {
        this.tvShow = tvShowFound;
      });
  }

  // askToEditTvShow(editedTvShow: TvShowModel) {
  //   this.tvShowsService
  //
  // }

}
