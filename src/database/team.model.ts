import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'

export type TeamInfo = Partial<{
  school: string
  address: string 
  contact: string
  flight: string
}>

const OptString = { type: String, required: false }

const TeamInfoSchema = new Schema<TeamInfo>({
  school: OptString, 
  address: OptString, 
  contact: OptString, 
  flight: OptString
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
