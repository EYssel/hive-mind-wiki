import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  email: {
    type: String,
    rangeKey: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});
