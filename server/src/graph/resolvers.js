import { Types } from 'mongoose';
import Poster from '../mongo/models/poster';
import Event from '../mongo/models/event';

export default {
  Query: {
    events: async () => {
      const allEvents = (await Event.find({}));
      return allEvents.map(async (event) => ({
        event,
        poster: (await Poster.findOne(Types.ObjectId(event.posterId))),
      }));
    },
  },
};
