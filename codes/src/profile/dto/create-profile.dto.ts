import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'FirstName should be a string value.' })
  @IsOptional()
  firstName?: string;

  @IsString({ message: 'LastName should be a string value.' })
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
