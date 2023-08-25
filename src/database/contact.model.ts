import { model, models, Schema, Types } from 'mongoose'

export interface IContact {
  _id: Types.ObjectId
  email: string
  name: string
  subject: string 
  content: string
}

const contactSchema = new Schema<IContact>({
  email: {
    type: String, 
    required: true, 
  },
  name: {
    type: String, 
    required: true, 
  }, 
  subject: {
    type: String, 
    required: true
  }, 
  content: {
    type: String, 
    required: true
  }
})

const ContactModel = models.contacts || model<IContact>('contacts', contactSchema)

export default ContactModel
