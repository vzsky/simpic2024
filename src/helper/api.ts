import { NextApiRequest, NextApiResponse } from "next"
import { isString } from "./type"
import mongoose from 'mongoose';

export type Err = {
  error: string
}

export const tryServe =
  <T>(func: (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse<T | Err>) => {
    try {
      await func(req, res)
      return
    } catch (e) {
      console.log(e)
      if (isString(e)) return res.status(500).json({ error: e })
      return res.status(500).json({ error: 'internal error' })
    }
  }

export const withDB = 
  <T>(func: (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void>) => 
  async (req: NextApiRequest, res: NextApiResponse<T>) => {
    if (mongoose.connections[0].readyState) { // use old db connection
      return func(req, res);
    }
    if (!process.env.MONGOURI) {
      throw "no mongo uri provided in the environment"
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGOURI)
    return func(req, res); 
  }
