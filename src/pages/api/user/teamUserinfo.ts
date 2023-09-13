import { makeFormHandler } from "../../../components/form/formApi";
import { UserInfo } from "../../../database/userinfo";
import { getUserFromRequest, queryTeam, updateTeam, updateUser } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import { UserInfoJOIS, getDefUserInfo, updateUserInfo } from "../../../helper/form/userinfo.api";
import { omap, toOptString } from "../../../helper/type";

type Data = UserInfo

const makeUpdate = async (req: NextApiRequest): Promise<Data|{}> => {
  const user = await getUserFromRequest(req)
  const ind = omap(toOptString(req.query.teamind), parseInt)
  const contestant = omap(toOptString(req.query.contestant), parseInt)
  if (ind === undefined) throw "no team index specified"
  if (contestant === undefined) throw "no contestant id specified"
  if (contestant <= 0 || contestant > 3) throw "invalid contestant id"
  const teamid = user.teams[ind]
  const updateValue = req.body

  let updator: object = { 
    $set: {
      [`contestant${contestant}`]: updateUserInfo(updateValue)
    }
  }

  let result = await updateTeam(teamid, updator)
  return {}
}

const getDefaultValue = async (req: NextApiRequest) => {
  const user = await getUserFromRequest(req)
  const ind = omap(toOptString(req.query.teamind), parseInt)
  const contestant = omap(toOptString(req.query.contestant), parseInt)
  if (ind === undefined) throw "no team index specified"
  if (contestant === undefined) throw "no contestant id specified"
  if (contestant <= 0 || contestant > 3) throw "invalid contestant id"
  const teamid = user.teams[ind]
  
  const team = await queryTeam(teamid)
  let userinfo = (team as any).toObject()[`contestant${contestant}`] as UserInfo

  console.log(getDefUserInfo(userinfo))

  return getDefUserInfo(userinfo)
}

const handler = makeFormHandler({ schema: UserInfoJOIS, getDefaultValue, makeUpdate })

export default handler
