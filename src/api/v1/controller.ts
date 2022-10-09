import { Request, Response } from 'express'
import { translateArray } from './service'

export async function translate(req: Request, res: Response): Promise<Response<string[]>> {
  if (!req.body.data || req.body.data.length === 0) { 
    return res.status(400).json({ message: 'No input provided', data: [] })
  }
  const translated = await translateArray(req.body.data)
  return res.status(200).json({ message: 'Successful', data: translated })
}