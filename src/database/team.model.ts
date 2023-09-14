import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'
import { emailRegex } from '../helper/validate'
import { FileSchema } from './file'

export type TeamInfo = Partial<{
  submit: Date

  school: string
  address: string 

  cert: {  
    name: string
    encoding: string
    time: number
  }

  contactname: string
  contactemail: string
  checkin: string
  room: string
  excursion1: string, 
  excursion2: string, 
  excursion3: string, 
  excursion4: string, 
}>

const OptString = { type: String, required: false }

const TeamInfoSchema = new Schema<TeamInfo>({
  submit: { type: Date, required: false, default: undefined },

  school: OptString, 
  address: OptString, 

  cert: FileSchema,

  contactname: OptString, 
  contactemail: {...OptString, match: emailRegex}, 
  checkin: {...OptString }, 
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
