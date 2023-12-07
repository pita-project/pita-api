import { Injectable } from '@nestjs/common';
import { Contact } from './contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  @InjectRepository(Contact)
  private readonly repository: Repository<Contact>;

  public async create(dto: CreateContactDto): Promise<Contact> {
    return await this.repository.save(dto);
  }

  public async findAll(): Promise<Contact[]> {
    return await this.repository.find();
  }
}
