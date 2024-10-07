import mongoose from 'mongoose';

export const connect = () => {
  mongoose
    .connect('mongodb://localhost:27017/elabs_backend')
    .then(() => console.log('connected to db'))
    .catch(() => console.log("can't connect to db"));
};
