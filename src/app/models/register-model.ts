import { LoginModel } from "./login-model";
import { UserRole } from "./user-role";

export class RegisterModel extends LoginModel {
  roleList: UserRole[] = [];
}