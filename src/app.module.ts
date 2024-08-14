import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemEntity } from './items/item/item.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Macht das ConfigModule global verfügbar
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // Lädt die entsprechende .env Datei
    }),
    TypeOrmModule.forRootAsync({
      imports: [
          ConfigModule,
      ],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [ItemEntity],
        synchronize: true, // Setzen Sie dies nur in der Entwicklung auf true
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([ItemEntity]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
