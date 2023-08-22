import mongoose from 'mongoose'

export const connectMongoose = async () => {
  if (!process.env.MONGOURI) {
    throw Error("no mongo uri in env")
  }
  return mongoose.connect(process.env.MONGOURI)
}
