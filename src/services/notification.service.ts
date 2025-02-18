import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { Notification } from '../schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  create(notification: Partial<Notification>) {
    return this.notificationRepository.create(notification);
  }

  findAll() {
    return this.notificationRepository.findAll();
  }

  findById(id: string) {
    return this.notificationRepository.findById(id);
  }

  update(id: string, updateData: Partial<Notification>) {
    return this.notificationRepository.update(id, updateData);
  }

  delete(id: string) {
    return this.notificationRepository.delete(id);
  }
}
