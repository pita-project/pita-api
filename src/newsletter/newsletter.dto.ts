import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNewsletterDto {
  @IsNotEmpty()
  @IsEmail()
  public readonly email!: string;
}
