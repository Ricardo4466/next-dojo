import type { NextApiRequest, NextApiResponse } from 'next'
import { people } from '../../../constants/people'

type Data = { id: number, name: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  const person = people.find((p: any) => p.id == id) as Data;
  res.status(200).json(person)
}