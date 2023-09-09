import { Types } from 'mongoose';
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { connectMongoose } from '../database/mongoose';
import UserModel, { IUser } from '../database/users.model';
import TeamModel, { ITeam } from '../database/team.model';

export const getUser = async (email:string): Promise<IUser> => {
  await connectMongoose()
  const user = await UserModel.findOne({email})
  return user
}

export const getUserId = async (email:string) => {
  const user = await getUser(email)
  return user?._id
}

export const updateUser = async (id:Types.ObjectId, update:Object) => {
  await connectMongoose()
  const result = await UserModel.updateOne({_id:id}, update, { runValidators: true })
  return result
}

export const updateTeam = async (id:Types.ObjectId, update:Object) => {
  await connectMongoose()
  const result = await TeamModel.updateOne({_id:id}, update, { runValidators: true })
  return result
}

export const queryUser = async (id:Types.ObjectId): Promise<IUser> => {
  await connectMongoose()
  const user = await UserModel.findOne({_id:id})
  return user
}

export const queryTeam = async (id:Types.ObjectId): Promise<ITeam> => {
  await connectMongoose()
  const team = await TeamModel.findOne({_id:id})
  return team
}

export const deleteTeam = async (id:Types.ObjectId): Promise<void> => {
  await connectMongoose()
  await TeamModel.deleteOne({_id: id})
}

export const getUserFromRequest = async (req: NextApiRequest) => {
  const token = await getToken({ req })
  if (!token) throw "Unauthenicated, no token received"
  if (!token.email) throw "Invald token: no email found"
  const user = await getUser(token.email)
  if (!user) throw "Cannot get userid from email"
  return user
}

export const getUserIdFromRequest = async (req: NextApiRequest) => {
  const token = await getToken({ req })
  if (!token) throw "Unauthenicated, no token received"
  if (!token.email) throw "Invald token: no email found"
  const userid = await getUserId(token.email)
  if (!userid) throw "Cannot get userid from email"
  return userid
}
