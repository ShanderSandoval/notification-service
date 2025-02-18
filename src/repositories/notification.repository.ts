import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from '../schemas/notification.schema';

@Injectable()
export class NotificationRepository {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<Notification>,
  ) {}

  async create(notification: Partial<Notification>): Promise<Notification> {
    return new this.notificationModel(notification).save();
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }

  async findById(id: string): Promise<Notification | null> {
    return this.notificationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateData: Partial<Notification>,
  ): Promise<Notification | null> {
    return this.notificationModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Notification | null> {
    return this.notificationModel.findByIdAndDelete(id).exec();
  }
}
