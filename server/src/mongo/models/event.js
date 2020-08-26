import {
  model, Schema, ObjectId,
} from 'mongoose';

const EventSchema = new Schema({
  _id: ObjectId,
  description: String,
  date: String,
  guestCount: Number,
  type: String,
  postcode: String,
  address: String,
  cancelled: Boolean,
  budget: Number,
  dietary: [String],
  posterId: String,
}, { collection: 'events' });

export default model('Event', EventSchema);
