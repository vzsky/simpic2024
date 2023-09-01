import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'

export interface IUser {
  _id: Types.ObjectId
  email: string
  isAdmin: boolean
  userinfo: UserInfo
  teams: Types.ObjectId[]
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
  },
  userinfo: UserInfoSchema, 
  teams: [Schema.ObjectId]
})

const UserModel = models.users || model<IUser>('users', userSchema)

export default UserModel
