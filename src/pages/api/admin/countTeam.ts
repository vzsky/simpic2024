import { NextApiRequest, NextApiResponse } from "next"
import { tryServe } from "../../../helper/api"
import TeamModel from "../../../database/team.model"

type Data = {
  count: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let count = await TeamModel.countDocuments(
    { "info.submit": {$ne: null}, 
    })
  res.status(200).json({count})
}

export default tryServe(handler)
