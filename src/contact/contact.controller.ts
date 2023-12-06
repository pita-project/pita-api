import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './contact.dto';
import { Contact } from './contact.entity';

@Controller({ path: 'contact' })
export class ContactController {
  @Inject(ContactService)
  private readonly service: ContactService;

  @Post('/new')
  public async create(@Body() createDto: CreateContactDto): Promise<Contact> {
    return await this.service.create(createDto);
  }
}
