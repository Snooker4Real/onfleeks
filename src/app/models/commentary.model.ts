export class CommentaryModel{
  public static inc: number;
  private _id: number;
  private _name: string;
  private _postDate: Date;
  private _author: string;
  private _content: string;

  constructor(name: string, postDate: Date, author: string, content: string) {
    if (!CommentaryModel.inc) {
      CommentaryModel.inc = 0;
    }
    this._id = CommentaryModel.inc++;
    this._name = name;
    this._postDate = postDate;
    this._author = author;
    this._content = content;
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

  get postDate(): Date {
    return this._postDate;
  }

  set postDate(value: Date) {
    this._postDate = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
