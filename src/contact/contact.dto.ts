import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  public readonly firstname!: string;

  @IsNotEmpty()
  @IsString()
  public readonly lastname!: string;

  @IsNotEmpty()
  @IsEmail()
  public readonly email!: string;

  @IsNotEmpty()
  @IsString()
  public readonly content!: string;
}
