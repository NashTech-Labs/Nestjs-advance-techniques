import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { LoggingInterceptor } from "./interceptos/logging.interceptor";

@UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Hello World!";
  }
}
