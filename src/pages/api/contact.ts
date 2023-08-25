import type { NextApiRequest, NextApiResponse } from 'next'
import { toOptEmail, toOptString } from '../../helper/type'
import { tryServe, withDB } from '../../helper/api'
import ContactModel from '../../database/contact.model'

type Data = {
  email?: string, 
  name?: string, 
  subject?: string, 
  content?: string
}

const defaultValue: Data = {
  email: "",
  name: "",
  subject: "",
  content: ""
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method == "POST") {
    let email   = toOptEmail (req.body.email)
    let name    = toOptString(req.body.name)
    let subject = toOptString(req.body.subject)
    let content = toOptString(req.body.content)

    let errorValue: Data = {}
    if (!email)   errorValue.email   = "email is required"
    if (!name)    errorValue.name    = "name must be specified"
    if (!subject) errorValue.subject = "subject must be specified"
    if (!content) errorValue.content = "content cannot be empty"

    if (!email || !name || !subject || !content) return res.status(400).json(errorValue)
    
    const contact = new ContactModel({email, name, subject, content})
    await contact.save()
    return res.status(200).json(defaultValue)
  }
  if (req.method == "GET") {
    return res.status(200).json(defaultValue)
  }
  return res.status(405).json({})
}

export default tryServe(withDB(handler))
