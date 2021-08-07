import {
  IsOptional,
  MaxLength,
  IsEmail,
  MinLength,
  IsString,
} from "class-validator";

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  name: string;

  @IsOptional()
   @IsString()
  @MaxLength(200)
  lastName: string;

  @IsEmail()
   @IsString()
  email: string;

  @MinLength(5)
   @IsString()
  @MaxLength(15)
  password: string;
}
