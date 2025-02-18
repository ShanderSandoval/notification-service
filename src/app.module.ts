import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './modules/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(<string>process.env.MONGO_URI),
    NotificationModule,
  ],
})
export class AppModule {}
