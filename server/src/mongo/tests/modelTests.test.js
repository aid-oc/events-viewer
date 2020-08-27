import mongoose from 'mongoose';
import EventModel from '../models/event';
import PosterModel from '../models/poster';

describe('Mongo Model Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('EventModel', () => {
    it('Allowed fields are saved correctly', async () => {
      const eventToSave = new EventModel({
        _id: mongoose.Types.ObjectId(), description: 'This will be a fantastic event', guestCount: 4, type: 'Party',
      });
      const savedEvent = await eventToSave.save();
      expect(savedEvent._id).toBeDefined();
      expect(savedEvent.description).toBe(eventToSave.description);
      expect(savedEvent.guestCount).toBe(eventToSave.guestCount);
      expect(savedEvent.type).toBe(eventToSave.type);
    });

    it('Invalid fields are not saved with the document', async () => {
      const eventToSave = new EventModel({
        _id: mongoose.Types.ObjectId(), description: 'This will be a fantastic event', someInvalidField: 'bob',
      });
      const savedEvent = await eventToSave.save();
      expect(savedEvent.description).toBeDefined();
      expect(savedEvent.someInvalidField).toBeUndefined();
    });
  });

  describe('PosterModel', () => {
    it('Allowed fields are saved correctly', async () => {
      const posterToSave = new PosterModel({
        _id: mongoose.Types.ObjectId(), email: 'aidan@codingtest.com', name: 'Aidan',
      });
      const savedPoster = await posterToSave.save();
      expect(savedPoster._id).toBeDefined();
      expect(savedPoster.email).toBe(posterToSave.email);
      expect(savedPoster.name).toBe(posterToSave.name);
    });

    it('Invalid fields are not saved with the document', async () => {
      const posterToSave = new PosterModel({
        _id: mongoose.Types.ObjectId(), email: 'aidan@codingtest.com', invalidField: 'doNotSaveMe',
      });
      const savedPoster = await posterToSave.save();
      expect(savedPoster._id).toBeDefined();
      expect(savedPoster.email).toBeDefined();
      expect(savedPoster.invalidField).toBeUndefined();
    });
  });
});
