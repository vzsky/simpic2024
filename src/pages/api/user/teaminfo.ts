import { makeFormHandler } from "../../../components/form/formApi";
import { getUserFromRequest, queryTeam, updateTeam } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import { omap, toOptString } from "../../../helper/type";
import { TeamInfo } from "../../../database/team.model";
import Joi from "joi";

type Data = TeamInfo

const makeUpdate = async (req: NextApiRequest): Promise<Data|{}> => {
  const user = await getUserFromRequest(req)
  const ind = omap(toOptString(req.query.teamind), parseInt)
  if (ind === undefined) throw "no team index specified"
  const teamid = user.teams[ind]
  const updateValue = req.body

  let updator: object = { 
    $set: {
      ['info']: updateValue
    }
  }

  let result = await updateTeam(teamid, updator)

  return {}
}

const getDefaultValue = async (req: NextApiRequest) => {
  const user = await getUserFromRequest(req)
  const ind = omap(toOptString(req.query.teamind), parseInt)
  if (ind === undefined) throw "no team index specified"
  const teamid = user.teams[ind]
  const team = await queryTeam(teamid)
  let teaminfo = (team as any).toObject()['info'] as TeamInfo

  if (teaminfo === undefined) return {}
  return teaminfo
}

const schema = Joi.object().unknown(true)

const handler = makeFormHandler({ schema, getDefaultValue, makeUpdate })

export default handler
