import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'config.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pita-db', // Utilisez le nom du service Docker comme hôte
      port: 5432,
      username: 'admin',
      password: 'e5UhC39wJQ9Ak42qjxT2',
      database: 'pita',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // Ne mettez pas à true en production
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
