import { model, models, Schema, Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId
  email: string
  isAdmin: boolean
}

const userSchema = new Schema<IUser>({
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  isAdmin: {
    type: Boolean, 
    default: false
  }
})

const UserModel = models.users || model<IUser>('users', userSchema)

export default UserModel
