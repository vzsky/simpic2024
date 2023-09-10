import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'
import { dateRegex } from '../helper/validate'

export interface IObserver {
  organization: string, 
  checkin: string, 
  checkout: string,
  excursion1: string, 
  excursion2: string, 
  excursion3: string, 
  excursion4: string, 
}

export const ObserverSchema = new Schema<IObserver>({
  organization: { type: String, required: false }, 
  checkin: { type: String, required: false }, 
  checkout: { type: String, required: false },
  excursion1: { type: String, required: false },  
  excursion2: { type: String, required: false },  
  excursion3: { type: String, required: false },  
  excursion4: { type: String, required: false },  
}, { _id: false })

export interface IUser {
  _id: Types.ObjectId
  email: string
  isAdmin: boolean
  as: "observer" | "competitor"
  userinfo: UserInfo
  teams: Types.ObjectId[]
  observer: IObserver
}

const userSchema = new Schema<IUser>({
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  as: {
    type: String,
    required: false,
    enum: ["observer", "competitor"]
  },
  isAdmin: {
    type: Boolean, 
    default: false
  },
  userinfo: UserInfoSchema, 
  teams: [Schema.ObjectId],
  observer: ObserverSchema,
})

const UserModel = models.users || model<IUser>('users', userSchema)

export default UserModel
