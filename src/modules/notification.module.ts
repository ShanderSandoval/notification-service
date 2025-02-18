import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from '../schemas/notification.schema';
import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationService } from '../services/notification.service';
import { NotificationController } from '../controllers/notification.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository],
  exports: [NotificationService, NotificationRepository],
})
export class NotificationModule {}
