export class TodoItem {
  public Id: number;
  public Description: string;
  public IsComplete: boolean;

  constructor(description: string) {
    this.Id = 0;
    this.Description = description;
    this.IsComplete = false;
  }
}
