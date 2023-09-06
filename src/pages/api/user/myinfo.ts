import Joi from "joi";
import { makeFormHandler } from "../../../components/form/formApi";
import { UserInfo } from "../../../database/userinfo";
import { getUserFromRequest, updateUser } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";

type Data = UserInfo

const makeUpdate = async (req: NextApiRequest): Promise<Data|{}> => {
  const user = await getUserFromRequest(req)
  const updateValue = req.body

  let updator: object = { 
    $set: {
      ["userinfo"]: {
        ...updateValue,
      }
    }
  }

  try {
    let result = await updateUser(user._id, updator)
  } catch(e) { 
    console.log("error in updating")//, e)
  } 
  return {}
}

const getDefaultValue = async (req: NextApiRequest): Promise<Data> => {
  const user = await getUserFromRequest(req)
  let userinfo = user.userinfo
  return userinfo
}

const schema = Joi.object().unknown(true)

const handler = makeFormHandler({ schema, getDefaultValue, makeUpdate })

export default handler
