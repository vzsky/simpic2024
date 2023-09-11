import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'
import { dateRegex, emailRegex } from '../helper/validate'

export type TeamInfo = Partial<{
  school: string
  address: string 
  contactname: string
  contactemail: string
  checkin: string
  checkout: string
  room: string
  excursion1: string, 
  excursion2: string, 
  excursion3: string, 
  excursion4: string, 
}>

const OptString = { type: String, required: false }

const TeamInfoSchema = new Schema<TeamInfo>({
  school: OptString, 
  address: OptString, 
  contactname: OptString, 
  contactemail: {...OptString, match: emailRegex}, 
  checkin: {...OptString }, 
  checkout: {...OptString },
  room: {...OptString },
  excursion1: { type: String, required: false },  
  excursion2: { type: String, required: false },  
  excursion3: { type: String, required: false },  
  excursion4: { type: String, required: false },  
}, { _id: false })

export interface ITeam {
  _id: Types.ObjectId
  contestant1: UserInfo, 
  contestant2: UserInfo,
  contestant3: UserInfo, 
  info: TeamInfo
}

const teamSchema = new Schema<ITeam>({
  contestant1: UserInfoSchema, 
  contestant2: UserInfoSchema, 
  contestant3: UserInfoSchema, 
  info: TeamInfoSchema
})

const TeamModel = models.teams || model<ITeam>('teams', teamSchema)

export default TeamModel
