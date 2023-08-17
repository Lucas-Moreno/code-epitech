import mongoose, { ConnectOptions } from 'mongoose';
import process from 'process'
import UserModel from './user.models'
import dotenv from 'dotenv'

dotenv.config();

const uri = `mongodb+srv://${process.env.NAME_DB}:${process.env.PASSWORD_DB}@cluster0.bqizz.mongodb.net/test-db?retryWrites=true&w=majority`;

if (!uri) {
  throw new Error('MONGO_URI environment variable is not defined')
}

mongoose.set('strictQuery', false)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions)

mongoose.connection.on('connected', () => {
    console.log("MongoDB Connection Succeeded");
});

mongoose.connection.on('error', (err) => {
    console.log("Error in db connection: " + err);
});

export { UserModel }