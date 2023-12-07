import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newsletter } from './newsletter.entity';
import { CreateNewsletterDto } from './newsletter.dto';

@Injectable()
export class NewsletterService {
  @InjectRepository(Newsletter)
  private readonly repository: Repository<Newsletter>;

  public async create(dto: CreateNewsletterDto): Promise<Newsletter> {
    return await this.repository.save(dto);
  }

  public async findAll(): Promise<Newsletter[]> {
    return await this.repository.find();
  }
}
