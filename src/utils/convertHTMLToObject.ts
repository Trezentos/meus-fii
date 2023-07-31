export interface StringProperties {
  post_title: string
  setor: string
  valor: string
  liquidezmediadiaria: string
  pvp: string
  dividendo: string
  yeld: string
  soma_yield_3m: string
  soma_yield_6m: string
  soma_yield_12m: string
  media_yield_3m: string
  media_yield_6m: string
  media_yield_12m: string
  soma_yield_ano_corrente: string
  variacao_cotacao_mes: string
  rentabilidade_mes: string
  rentabilidade: string
  patrimonio: string
  vpa: string
  p_vpa: string
  vpa_yield: string
  vpa_change: string
  vpa_rent_m: string
  vpa_rent: string
  v_fisica: string
  v_financeira: string
  ativos: string
}

function convertTdsRowToObject(actualTdsString: string) {
  const allTds = actualTdsString.replaceAll('</td>', '</td>,').split('</td>,')

  const finalObj = {}

  allTds.forEach((td) => {
    const match = td.match(/data-collum="collum-(.*?)"/)
    const key = match ? match[1] : null // Se houver uma correspondência, o valor será na posição 1.

    const lastIndex = td.lastIndexOf('>')

    const value = td.substring(lastIndex + 1, td.length)

    if (!key) return

    Object.assign(finalObj, { [`${key}`]: value })
  })

  return finalObj
}

export default function extractAllRowsObjectToArray(allRowsText: string) {
  const allTds = allRowsText
    .replaceAll('<tr scope="row">', '')
    .replaceAll('</tr>', '</tr>,')
    .split('</tr>,')
    .filter((item) => item !== '')

  const result = allTds
    .map((item) => convertTdsRowToObject(item))
    .map((item) => item as StringProperties)

  return result
}
