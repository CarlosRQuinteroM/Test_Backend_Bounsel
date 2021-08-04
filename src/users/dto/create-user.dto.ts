import {
  IsOptional,
  MaxLength,
  IsEmail,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsOptional()
  //    @isString()
  @MaxLength(200)
  name: string;

  @IsOptional()
  //    @isString()
  @MaxLength(200)
  lastName: string;

  @IsEmail()
  //    @isString()
  email: string;

  @MinLength(5)
  //    @isString()
  @MaxLength(15)
  password: string;
}
