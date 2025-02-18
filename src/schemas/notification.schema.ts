import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'notification_collection' })
export class Notification extends Document {
  @Prop({ required: true })
  personElementId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Date, default: Date.now })
  localDateTime: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
