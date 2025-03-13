import { IsEmail, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    //? mean this field is optinal it's not required
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    password?: string;
}