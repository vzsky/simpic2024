import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserFromRequest, updateUser } from '../../../helper/dbQuery'

type Data = {
  as: 'competitor' | 'observer'
}

const handler = async (
  req: NextApiRequest,  
  res: NextApiResponse<Data>
) => {
  const user = await getUserFromRequest(req)
  if (!user) throw "no user logged in"
  if (req.method == "GET") {
    return res.status(200).json({ as: user.as })
  }
  if (req.method == "POST") {
    if (req.body.as != "observer" && req.body.as != "competitor") throw "wrong 'as' type"
    let result = await updateUser(user._id, { $set: { as: req.body.as }})
    return res.status(200).json({ as: req.body.as })
  }
  throw "method not accepted"
}

export default handler
