export class Ticket {
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public get created(): string {
    return this._created;
  }
  public set created(value: string) {
    this._created = value;
  }
  public get updated(): string {
    return this._updated;
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  
  // id: string
  // title: string;
  // description: string;
  // updated: string;
  // created: string;
  // owner: string;
  // status: string;

  public constructor(
    private _id: string,
    private _title: string,
    private _description: string,
    private _updated: string,
    private _created: string,
    private _owner: string,
    private _status: string

  ){

  }
}