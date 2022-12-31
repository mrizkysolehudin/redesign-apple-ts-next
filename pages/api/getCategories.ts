import { NextApiRequest, NextApiResponse } from "next"


type Data = {
  categories: Category[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name : "Rizky Dev" })
}