import mongoose from 'mongoose';
import EventModel from '../../mongo/models/event';
import PosterModel from '../../mongo/models/poster';

const createPoster = (posterData) => {
  const posterToSave = new PosterModel({
    _id: mongoose.Types.ObjectId(),
    ...posterData,
  });
  return posterToSave.save();
};

const createEvent = (eventData) => {
  const eventToSave = new EventModel({
    _id: mongoose.Types.ObjectId(),
    ...eventData,
  });
  return eventToSave.save();
};

export { createPoster, createEvent };
