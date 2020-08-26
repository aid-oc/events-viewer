import {
  model, Schema, ObjectId,
} from 'mongoose';

const PosterSchema = new Schema({
  _id: ObjectId,
  email: String,
  image: String,
  name: String,
  phone: String,
}, { collection: 'posters' });

export default model('Poster', PosterSchema);
