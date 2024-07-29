import { User } from "./user";

export class Ticket {
    private _id: string= "";
    private _firstname: string = "";
    private _lastname: string = "";
    private _title: string= ""
    private _description: string=""
    private _owner!: User;
    private _status: string= ""


  public constructor(
  ){
  }  
  
  
  
  public get lastname(): string {
    return this._lastname;
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
    public get firstname(): string {
    return this._firstname;
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
  public get owner(): User {
    return this._owner;
  }
  public set owner(value: User) {
    this._owner = value;
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

}