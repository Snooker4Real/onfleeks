import {CommentaryModel} from "./commentary.model";

export class TvShowModel {
  private _id: number;
  private _name: string;
  private _firstSeasonOutDate: Date;
  private _seasonsNumber: number;
  private _description: string;
  private _criticism: number;
  private _imgUrl: string;
  private _commentaries : CommentaryModel[];

  private static _tvSowLength = 1;


  constructor(name: string, firstSeasonOutDate: Date, seasonsNumber: number, description: string, criticism: number, imgUrl: string, commentaries: CommentaryModel[]) {
    this._id = TvShowModel._tvSowLength;
    this._name = name;
    this._firstSeasonOutDate = firstSeasonOutDate;
    this._seasonsNumber = seasonsNumber;
    this._description = description;
    this._criticism = 0;
    this._imgUrl = imgUrl;
    this._commentaries = commentaries;

    TvShowModel._tvSowLength++;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get firstSeasonOutDate(): Date {
    return this._firstSeasonOutDate;
  }

  set firstSeasonOutDate(value: Date) {
    this._firstSeasonOutDate = value;
  }

  get seasonsNumber(): number {
    return this._seasonsNumber;
  }

  set seasonsNumber(value: number) {
    this._seasonsNumber = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get criticism(): number {
    return this._criticism;
  }

  set criticism(value: number) {
    this._criticism = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get commentaries(): CommentaryModel[] {
    return this._commentaries;
  }

  set commentaries(value: CommentaryModel[]) {
    this._commentaries = value;
  }

  static get tvSowLength(): number {
    return this._tvSowLength;
  }

  static set tvSowLength(value: number) {
    this._tvSowLength = value;
  }
}
