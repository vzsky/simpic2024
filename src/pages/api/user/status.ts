import type { NextApiRequest, NextApiResponse } from 'next'
import { tryServe, withDB } from '../../../helper/api'
import { getUserFromRequest, queryTeam } from '../../../helper/dbQuery'
import { isCompleted as userinfoIsCompleted } from '../../../helper/form/userinfo.api'

export type Status = "complete" | "not-complete" | "submitted"

type Data = { 
  myinfo: Status, 
  teams: {
    contestant1: Status, 
    contestant2: Status, 
    contestant3: Status, 
    teaminfo: Status,
  }[], 
  observer: Status,
} | {}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method == "GET") {
    let user = await getUserFromRequest(req)
    let myinfo = userinfoIsCompleted(user.userinfo)
    let teams = (await Promise.all(
        user.teams.map(queryTeam)
      )).map((team) => ({
        contestant1: userinfoIsCompleted(team.contestant1),
        contestant2: userinfoIsCompleted(team.contestant2),
        contestant3: userinfoIsCompleted(team.contestant3),
        teaminfo: false // TODO
      }))

    let observer = false // TODO

    return res.status(200).json({
      myinfo, 
      teams, 
      observer
    })
  }
  return res.status(405).json({})
}

export default tryServe(withDB(handler))