import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteTeam, getUserFromRequest, queryTeam, updateUser } from '../../../helper/dbQuery'
import TeamModel, { ITeam } from '../../../database/team.model'
import { Types } from 'mongoose'

type Data = {
  teams: ITeam[]
}

const handler = async (
  req: NextApiRequest,  
  res: NextApiResponse<Data>
) => {
  const user = await getUserFromRequest(req)
  if (!user) throw "no user logged in"
  if (req.method == "GET") {
    return res.status(200).json({ teams: await Promise.all(user.teams.map(queryTeam)) })
  }
  if (req.method == "POST") {
    let team = new TeamModel()
    await team.save()
    await updateUser(user._id, { $push: { teams: team._id }})
    const result = await getUserFromRequest(req)
    return res.status(200).json({ teams: await Promise.all(result.teams.map(queryTeam)) })
  }
  if (req.method == "DELETE") {
    const id = req.body.id
    await updateUser(user._id, { $pull: { teams: id }})
    await deleteTeam(id)
    const result = await getUserFromRequest(req)
    return res.status(200).json({ teams: await Promise.all(result.teams.map(queryTeam)) })
  }
  throw "method not accepted"
}

export default handler
