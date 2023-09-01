import { model, models, Schema, Types } from 'mongoose'
import { UserInfo, UserInfoSchema } from './userinfo'

export interface ITeam {
  _id: Types.ObjectId
  contestant1: UserInfo, 
  contestant2: UserInfo,
  contestant3: UserInfo
}

const teamSchema = new Schema<ITeam>({
  contestant1: UserInfoSchema, 
  contestant2: UserInfoSchema, 
  contestant3: UserInfoSchema
})

const TeamModel = models.teams || model<ITeam>('teams', teamSchema)

export default TeamModel
