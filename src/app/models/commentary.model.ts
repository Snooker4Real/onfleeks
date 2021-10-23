export class CommentaryModel{
  private _id: number;
  private _postDate: Date;
  private _author: string;
  private _content: string;

  private static _commentaryLength = 1;

  constructor(postDate: Date, author: string, content: string) {
    this._id = CommentaryModel._commentaryLength;
    this._postDate = postDate;
    this._author = author;
    this._content = content;

    CommentaryModel._commentaryLength++;

  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
