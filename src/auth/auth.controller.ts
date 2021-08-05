import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Auth, User } from "src/common/decorators";
import { User as UserEntity } from "src/users/entities";
import { AuthService } from "./auth.service";
import { loginDto } from "./dtos/login.dto";
import {localAuthGuard } from "./guards";

@ApiTags("Auth routes")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(localAuthGuard)
  @Post("login")
  async login(
    @Body() loginDto:loginDto,
    @User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: "Login successful", data };
  }

  @Auth()
  @Get("profile")
  async profile(@User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: "this is your Data", data };
  }
}
