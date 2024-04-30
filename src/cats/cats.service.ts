import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
  private readonly cats: string[] = ["Meow", "Purr", "Hiss"];

  findAll(): string[] {
    return this.cats;
  }
}
