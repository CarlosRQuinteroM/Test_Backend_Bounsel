import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/common/decorators";
import { User as UserEntity } from "src/users/entities";
import { AuthService } from "./auth.service";
import { JwtAuthGuard, localAuthGuard } from "./guards";

@ApiTags("Auth routes")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(localAuthGuard)
  @Post("login")
  async login(@User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: "Login successful", data };
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async profile(@User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: "this is your Data", data };
  }
}
