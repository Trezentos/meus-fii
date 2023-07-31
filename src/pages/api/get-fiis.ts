import type { NextApiRequest, NextApiResponse } from 'next'
import getTableHtmlContent from '@/utils/getHtmlContent'
import extractAllRowsObjectToArray from '@/utils/convertHTMLToObject'
import typeAllObjects, { FiiType } from '@/utils/typeAllObjects'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const htmlTableContent = await getTableHtmlContent(
    'https://www.fundsexplorer.com.br/ranking',
  )

  const allObjects = extractAllRowsObjectToArray(htmlTableContent)

  const formattedObjs = typeAllObjects(allObjects)

  // console.log(formattedObjs[formattedObjs.length - 1])

  return res.status(200).json(formattedObjs)
}
