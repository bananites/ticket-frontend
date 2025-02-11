export class User {
  private _id: string = '';
  private _firstname: string = '';
  private _lastname: string = '';
  private _email: string = '';



  public get email(): string{
    return this._email;
  }
  public set email(value: string){
    this._email = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public get lastname(): string {
    return this._lastname;
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
}
