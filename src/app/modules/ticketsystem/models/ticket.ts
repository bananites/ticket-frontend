import { User } from "./user";

export class Ticket {
    private id?: string;
    private createdBy: string = "";
    private title: string= ""
    private description: string=""
    private owner!: User;
    private status?: string


  constructor(ticket?: Ticket
  ){
    this.id = ticket?.id || undefined
    this.title = ticket?.title || ""
    this.description = ticket?.description || ""
  }  
  
  public get getCreatedBy(): string {
    return this.createdBy;
  }
  public set setCreatedBy(value: string) {
    this.createdBy = value;
  }
  
  public get getStatus(): string | undefined{
    return this.status

  }
  public set setStatus(value: string) {
    this.status = value;
  }
  public get getOwner(): User {
    return this.owner;
  }
  public set setOwner(value: User) {
    this.owner = value;
  }
  
  public get getDescription(): string {
    return this.description;
  }
  public set setDescription(value: string) {
    this.description = value;
  }
  public get getTitle(): string {
    return this.title;
  }
  public set setTitle(value: string) {
    this.title = value;
  }
  public get getId(): string | undefined{
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

}