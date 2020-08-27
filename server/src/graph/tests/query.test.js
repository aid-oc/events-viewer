import mongoose from 'mongoose';
import { createTestClient } from 'apollo-server-testing';
import EventModel from '../../mongo/models/event';
import PosterModel from '../../mongo/models/poster';
import createGraphServer from '../createGraphServer';

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

  describe('events query', () => {
    const { query } = createTestClient(createGraphServer());

    beforeEach(async () => {
      await PosterModel.deleteMany();
      await EventModel.deleteMany();
    });

    it('Allows you to query for a poster with an associated event', async () => {
      const posterToSave = new PosterModel({
        _id: mongoose.Types.ObjectId(), email: 'aidan@codingtest.com', name: 'Aidan',
      });
      const savedPoster = await posterToSave.save();

      const eventToSave = new EventModel({
        _id: mongoose.Types.ObjectId(),
        posterId: savedPoster.id,
        description: 'Example event',
      });
      await eventToSave.save();

      const { data } = await query({ query: '{ events { poster { email name } } }' });
      expect(data.events.length).toBe(1);
      expect(data.events).toMatchObject([{ poster: { email: 'aidan@codingtest.com', name: 'Aidan' } }]);
    });

    it('Does not return a poster which does not have associated event', async () => {
      const posterToSave = new PosterModel({
        _id: mongoose.Types.ObjectId(), email: 'aidan@codingtest.com', name: 'Aidan',
      });
      await posterToSave.save();

      const { data } = await query({ query: '{ events { poster { email name } } }' });
      expect(data.events.length).toBe(0);
      expect(data.events).toMatchObject([]);
    });

    it('Allows you to query for event content', async () => {
      const eventToSave = new EventModel({
        _id: mongoose.Types.ObjectId(),
        description: 'Example event',
      });
      await eventToSave.save();

      const { data } = await query({ query: '{ events { event { description } } }' });
      expect(data.events.length).toBe(1);
      expect(data.events[0].event.description).toBe('Example event');
    });

    it('Returns an associated poster for an event', async () => {
      const posterToSave = new PosterModel({
        _id: mongoose.Types.ObjectId(), email: 'aidan@codingtest.com',
      });
      const savedPoster = await posterToSave.save();

      const eventToSave = new EventModel({
        _id: mongoose.Types.ObjectId(),
        posterId: savedPoster.id,
        description: 'aidans event',
      });
      await eventToSave.save();

      const { data } = await query({ query: '{ events { event { description } poster { email }  } }' });
      expect(data.events.length).toBe(1);
      expect(data.events[0].poster.email).toBe('aidan@codingtest.com');
      expect(data.events[0].event.description).toBe('aidans event');
    });
  });
});
