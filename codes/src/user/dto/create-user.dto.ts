import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name should be a string value.' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'Email should be a valid email.' })
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'Password should be string' })
  @IsNotEmpty()
  @MinLength(2)
  password: string;
}
