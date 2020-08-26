import { connect } from 'mongoose';

export default async () => {
  await connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
};
