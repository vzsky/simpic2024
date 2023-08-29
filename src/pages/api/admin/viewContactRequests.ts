import { NextApiRequest, NextApiResponse } from "next"
import { tryServe } from "../../../helper/api"
import ContactModel from "../../../database/contact.model"

type Data = {
  allContacts: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let allContacts = await ContactModel.find({})
  res.status(200).json({allContacts})
}

export default tryServe(handler)
