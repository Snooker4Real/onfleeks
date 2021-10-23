import { Component, OnInit } from '@angular/core';
import {TvShowModel} from "../../models/tv-show.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TvShowsService} from "../../services/tv-shows/tv-shows.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentaryModel} from "../../models/commentary.model";

@Component({
  selector: 'app-single-tv-show-view',
  templateUrl: './single-tv-show-view.component.html',
  styleUrls: ['./single-tv-show-view.component.css']
})
export class SingleTvShowViewComponent implements OnInit {

  tvShow: TvShowModel | undefined;

  form: FormGroup;

  constructor(private tvShowsService: TvShowsService ,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.tvShowsService
      .getTvShowById(id)
      .then((tvShow: TvShowModel) => {
        this.tvShow = tvShow;
      });
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      author: ['',Validators.required],
      content: ['',Validators.required],
    });
  }

  onSubmitCommentForm() {
    const formValue = this.form.value;
    const newComment = new CommentaryModel(
      formValue['title'],
      new Date(),
      formValue['author'],
      formValue['content']
    );
    const id = this.route.snapshot.params.id;
    this.tvShowsService
      .addComment(newComment, id)
      .then(() => {
      this.form.reset();
    });
  }


}
