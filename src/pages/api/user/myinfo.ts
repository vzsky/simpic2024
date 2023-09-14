import { makeFormHandler } from "../../../components/form/formApi";
import { UserInfo } from "../../../database/userinfo";
import { getUserFromRequest, updateUser } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import { UserInfoJOIS, getDefUserInfo, updateUserInfo } from "../../../helper/form/userinfo.api";

type Data = UserInfo

const makeUpdate = async (req: NextApiRequest): Promise<Data|{}> => {
  const user = await getUserFromRequest(req)
  const updateValue = req.body

  let updator: object = { 
    $set: {
      ["userinfo"]: updateUserInfo(updateValue)
    }
  }

  let result = await updateUser(user._id, updator)
  return {}
}

const getDefaultValue = async (req: NextApiRequest) => {
  const user = await getUserFromRequest(req)
  if (user.userinfo == undefined) return {}
  let userinfo = (user.userinfo as any).toObject() as UserInfo
  return getDefUserInfo(userinfo)
}

const handler = makeFormHandler({ schema: UserInfoJOIS, getDefaultValue, makeUpdate })

export default handler
