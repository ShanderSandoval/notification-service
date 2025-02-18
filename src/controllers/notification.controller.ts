import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../schemas/notification.schema';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() notification: Partial<Notification>) {
    return this.notificationService.create(notification);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.notificationService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Notification>) {
    return this.notificationService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notificationService.delete(id);
  }
}
