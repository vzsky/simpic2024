import { makeFormHandler } from "../../../components/form/formApi";
import { getUserFromRequest, queryTeam, updateTeam } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import { omap, toOptString } from "../../../helper/type";
import { TeamInfo } from "../../../database/team.model";
import Joi from "joi";
import { dateRegex, emailRegex } from "../../../helper/validate";

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

const schema = Joi.object({
  contactemail: Joi.string().regex(emailRegex).allow('').messages({ 
    'string.pattern.base': 'contact email should be a valid email'
  }), 
  excursion2: Joi.string().invalid(Joi.ref('excursion1')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
  excursion3: Joi.string().invalid(Joi.ref('excursion1')).invalid(Joi.ref('excursion2')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
  excursion4: Joi.string().invalid(Joi.ref('excursion1')).invalid(Joi.ref('excursion2')).invalid(Joi.ref('excursion3')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
}).unknown(true)

const handler = makeFormHandler({ schema, getDefaultValue, makeUpdate })

export default handler