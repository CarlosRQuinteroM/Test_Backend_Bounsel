import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

// With PartialType we convert all classes into additional properties to be edited
export class EditUsersDto  extends PartialType(CreateUserDto) {

}
