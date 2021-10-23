import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TvShowModel} from "../../models/tv-show.model";
import {CommentaryModel} from "../../models/commentary.model";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {


  tvShows: BehaviorSubject<Array<TvShowModel>>;

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
        'Brooklyn Nine-Nine',
        new Date("2013-09-19"),
        8,
        "La vie au sein du commissariat de police de Brooklyn n'est pas de tout repos : une pléiade d'inspecteurs un poil loufoques doivent jongler entre leur mission de protéger et servir les habitants de la ville, leur vie personnelle et surtout celle du bureau. ",
        9,
        "https://www.troyes-obs.fr/wp-content/uploads/2021/02/brooklyn-nine-nine-season-7-758x506.jpg",
        []),

      new TvShowModel(
        'The Morning Show ',
        new Date("2019-11-01"),
        2,
        "Les coulisses des 'morning shows' télévisés – qui accompagnent chaque matin le réveil de millions d'Américains – du point de vue de ceux qui les font. ",
        9.72,
        "https://www.apple.com/fr/tv-pr/shows-and-films/t/the-morning-show/images/show-home-graphic-header/season-2-(16x9)/TMS2_Hero_ControlRoom_Press_16x9_Header_graphic_header_16_9_show_home.jpg.medium.jpg",
        []),

      new TvShowModel(
        'Ted Lasso',
        new Date("2020-08-14"),
        2,
        "Ted Lasso, entraîneur de football américain, débarque à Londres pour coacher une équipe de football... pas américain. Face à une équipe et une ville dubitatives, arrivera-t-il à leur adopter la méthode Ted Lasso ? ",
        9.7,
        "https://i0.wp.com/avingagiraffe.com/wp-content/uploads/2020/08/Ted-Lasso.jpg?resize=1000%2C563&ssl=1",
        []),

      new TvShowModel(
        'American Gods',
        new Date("2017-05-01"),
        3,
        "Un homme sortant de prison rencontre un vieil escroc qui l'embauche comme garde du corps et l'entraîne dans un long périple à travers les États-Unis. L'ex-détenu découvre alors que son « patron » est un ancien dieu nordique en plein combat contre les divinités modernes : Internet, les voitures, la télévision, et tous les nouveaux médias.",
        9.1,
        "https://i2.wp.com/maze.fr/wp-content/uploads/2021/01/1nReElpS-ZVxQiFjErSSeXQ.jpg?zoom=2&resize=800%2C400",
        []),

      new TvShowModel(
        'Power',
        new Date("2014-06-08"),
        6,
        "Propriétaire d’un nightclub new-yorkais très populaire, James 'Ghost' St. Patrick entend développer son empire. Seulement sa double-vie à la tête d'un des réseaux de drogue les plus importants de la ville pourrait devenir un handicap. Vouloir mettre un terme à sa carrière de criminel risque de mettre en danger son mariage, sa famille et ses affaires.",
        9.52,
        "https://home.adelphi.edu/~al22155/POWER.jpg",
        []),

      new TvShowModel(
        'Euphoria (US)',
        new Date("2019-06-17"),
        1,
        "À 17 ans, Rue Bennett, fraîchement sortie de désintox, cherche à donner un sens à son existence. Elle se lie très vite à Jules Vaughn, une fille trans récemment arrivée en ville après le divorce de ses parents. Dans leur sillage gravitent Nate Jacobs, un sportif dont les problèmes de colère masquent des complexes sexuels ; Maddy Perez, la petite amie de Nate ; Chris McKay, star de l'équipe de football qui peine à suivre les cours ; Cassie Howard, dont le passif sexuel continue de la poursuivre ; Lexi Howard, jeune sœur de Cassie et amie d'enfance de Rue ; et Kat Hernandez, en pleine exploration de sa sexualité. ",
        9.56,
        "https://static.fnac-static.com/multimedia/Images/FR/NR/fc/c5/d0/13682172/1540-1/tsp20210913134133/Euphoria-Saison-1-Edition-Collector-Vinyle-Colore.jpg",
        []),
    ];
    this.tvShows = new BehaviorSubject<Array<TvShowModel>>(tvShowsToPush);
  }

  // Ici !!!!!!!

  getTvShowById(tvShowId: number): Promise<TvShowModel> {
    return new Promise<TvShowModel>(
      (res, rej) => {
        const tvShows = this.tvShows.getValue();

        for (let tvShow of tvShows){
          if (tvShow.id == tvShowId){
            res(tvShow);
            break;
          }
        }
      }
    );
  }




  addComment(commentToAdd: CommentaryModel, idTvShow: number): Promise<void> {
    return new Promise<void>(
      (res,rej) => {
        setTimeout(() => {
          const tvShows = this.tvShows.getValue();
          for (let tvShow of tvShows) {
            if (tvShow.id == idTvShow) {
              tvShow.commentaries.push(commentToAdd);
              this.tvShows.next(tvShows);
              res();
              break;
            }
          }
        },500)
      })
  }



}
