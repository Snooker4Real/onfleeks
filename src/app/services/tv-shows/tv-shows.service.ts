import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TvShowModel} from "../../models/tv-show.model";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {


  tvShows: BehaviorSubject<Array<TvShowModel>>;
  //tvShow: number;

  constructor() {

    const tvShowsToPush = [
      new TvShowModel(
        'You',
        new Date("2018-11-11"),
        3,
        "Joe, le propriétaire d'une librairie new-yorkaise, devient obsédé par une de ses clientes, Beck, qui se trouve être une aspirante écrivaine. Il va alors se servir des réseaux sociaux pour nourrir son obsession, savoir où elle est et ce qu'elle fait à tout moment, et tenter de faire tomber tous les obstacles qui pourraient se dresser en travers du chemin de leur possible romance.",
        9.52,
        "https://www.culturefemme.com/wp-content/uploads/2021/10/you.png-768x450.jpeg",
        []),

      new TvShowModel(
        'You',
        new Date("2018-11-11"),
        3,
        "Joe, le propriétaire d'une librairie new-yorkaise, devient obsédé par une de ses clientes, Beck, qui se trouve être une aspirante écrivaine. Il va alors se servir des réseaux sociaux pour nourrir son obsession, savoir où elle est et ce qu'elle fait à tout moment, et tenter de faire tomber tous les obstacles qui pourraient se dresser en travers du chemin de leur possible romance.",
        9.52,
        "https://www.culturefemme.com/wp-content/uploads/2021/10/you.png-768x450.jpeg",
        []),

      new TvShowModel(
        'You',
        new Date("2018-11-11"),
        3,
        "Joe, le propriétaire d'une librairie new-yorkaise, devient obsédé par une de ses clientes, Beck, qui se trouve être une aspirante écrivaine. Il va alors se servir des réseaux sociaux pour nourrir son obsession, savoir où elle est et ce qu'elle fait à tout moment, et tenter de faire tomber tous les obstacles qui pourraient se dresser en travers du chemin de leur possible romance.",
        9.52,
        "https://www.culturefemme.com/wp-content/uploads/2021/10/you.png-768x450.jpeg",
        []),

      new TvShowModel(
        'You',
        new Date("2018-11-11"),
        3,
        "Joe, le propriétaire d'une librairie new-yorkaise, devient obsédé par une de ses clientes, Beck, qui se trouve être une aspirante écrivaine. Il va alors se servir des réseaux sociaux pour nourrir son obsession, savoir où elle est et ce qu'elle fait à tout moment, et tenter de faire tomber tous les obstacles qui pourraient se dresser en travers du chemin de leur possible romance.",
        9.52,
        "https://www.culturefemme.com/wp-content/uploads/2021/10/you.png-768x450.jpeg",
        []),

      new TvShowModel(
        'You',
        new Date("2018-11-11"),
        3,
        "Joe, le propriétaire d'une librairie new-yorkaise, devient obsédé par une de ses clientes, Beck, qui se trouve être une aspirante écrivaine. Il va alors se servir des réseaux sociaux pour nourrir son obsession, savoir où elle est et ce qu'elle fait à tout moment, et tenter de faire tomber tous les obstacles qui pourraient se dresser en travers du chemin de leur possible romance.",
        9.52,
        "https://www.culturefemme.com/wp-content/uploads/2021/10/you.png-768x450.jpeg",
        []),
    ];
    this.tvShows = new BehaviorSubject<Array<TvShowModel>>(tvShowsToPush);
  }

  // Ici !!!!!!!

  getTvShowById(tvShowId: number): Promise<TvShowModel> {
    return new Promise<TvShowModel>(
      (res, rej) => {
        const tvShows = this.tvShows.getValue();

        for (let tvShow in tvShows){
          if (tvShow.id == tvShowId){
            res(tvShow);
            break;
          }
        }
      }
    );
  }

}
