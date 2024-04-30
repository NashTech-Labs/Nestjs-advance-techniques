import { Controller, Get, UseGuards } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { AuthGuard } from "../guards/auth.guard";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
}
