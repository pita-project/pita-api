import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { CreateNewsletterDto } from './newsletter.dto';
import { Newsletter } from './newsletter.entity';

@Controller({ path: 'newsletter' })
export class NewsletterController {
  @Inject(NewsletterService)
  private readonly service: NewsletterService;

  @Post('/new')
  public async create(
    @Body() createDto: CreateNewsletterDto,
  ): Promise<Newsletter> {
    return await this.service.create(createDto);
  }

  @Get('/all')
  public async findAll(): Promise<Newsletter[]> {
    return await this.service.findAll();
  }
}
