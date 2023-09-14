import type { NextApiRequest, NextApiResponse } from 'next'
import { tryServe, withDB } from '../../../helper/api'
import { getUserFromRequest, queryTeam, updateTeam, updateUser } from '../../../helper/dbQuery'
import { isCompleted as userinfoIsCompleted } from '../../../helper/form/userinfo.api'
import { isCompleted as teaminfoIsCompleted } from './teaminfo'
import { isCompleted as observerIsCompleted } from './observer'
import { UserInfo } from '../../../database/userinfo'
import { ITeam } from '../../../database/team.model'

type Data = { }

const now = () => ( (new Date()).getTime() )

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method == "GET") {
    return res.status(200).json({})
  }
  if (req.method == "POST") {

    console.log("RECIEVE A POST SUBMIT", req.body)

    let user = await getUserFromRequest(req)
    let formid = req.body.formid

    if (formid == 'userinfo') {
      if (userinfoIsCompleted(user.userinfo) != "complete") return res.status(400).json({})
      await updateUser(user._id, { "$set": { "userinfo.submit": now() }})
      return res.status(200).json({})
    }

    if (formid == 'observer') {
      if (observerIsCompleted(user.observer) != "complete") return res.status(400).json({})
      let x = await updateUser(user._id, { "$set": { "observer.submit": now() }})
      return res.status(200).json({})
    }
    
    if (formid.startsWith('teaminfo')) {
      let teamind = parseInt(formid.split('-')[1])
      let teamid = user.teams[teamind]
      let team = await queryTeam(teamid)

      if (teaminfoIsCompleted(team.info) != "complete") return res.status(400).json({})
      await updateTeam(teamid, { "$set": { "info.submit": now() }})
      return res.status(200).json({})
    }

    if (formid.startsWith('team')) { // team-ind-cont
      let teamind = parseInt(formid.split('-')[1])
      let teamid = user.teams[teamind]
      let team = await queryTeam(teamid)

      let contestant = parseInt(formid.split('-')[2])
      let key = `contestant${contestant}` as keyof ITeam
      let userinfo = team[key] as UserInfo

      if (userinfoIsCompleted(userinfo) != "complete") return res.status(400).json({})
      await updateTeam(teamid, { "$set": { [`${key}.submit`]: now() }})
      return res.status(200).json({})
    }

    return res.status(500).json({})
  }
  return res.status(405).json({})
}

export default tryServe(withDB(handler))
