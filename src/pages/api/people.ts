import type { NextApiRequest, NextApiResponse } from 'next'
import { people } from '../../constants/people'

type Data = { id: number, name: string }[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(people)
}