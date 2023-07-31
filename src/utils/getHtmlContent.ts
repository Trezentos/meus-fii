import puppeteer from 'puppeteer'

export default async function getTableHtmlContent(url: string) {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  await page.goto(url, { waitUntil: 'networkidle0' }) // Espera até que todas as solicitações de rede sejam concluídas

  const html = await page.content()

  await browser.close()

  const firstIndex = html.indexOf('<tbody class')
  const secondIndex = html.lastIndexOf('</tbody>')

  const tableTextWithTBody = html.substring(firstIndex, secondIndex)

  const firstRowTextIndex = tableTextWithTBody.indexOf('>')

  const allRowsText = tableTextWithTBody.substring(
    firstRowTextIndex,
    secondIndex,
  )

  const withoutATag = allRowsText.replaceAll(/<a[^>]*>|<\/a>/g, '')

  return withoutATag.substring(1, secondIndex)
}
