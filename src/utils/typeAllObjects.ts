import { StringProperties } from './convertHTMLToObject'

export interface FiiType {
  nome: string
  setor: string
  valor: number
  liquidezMediaDiaria: number
  pvp: number
  dividendo: number
  yield: number
  somaYield3m: number
  somaYield6m: number
  somaYield12m: number
  mediaYield3m: number
  mediaYield6m: number
  mediaYield12m: number
  somaYieldSomaRecorrente: number
  variacaoCotacaoMes: number
  rentabilidadeMes: number
  rentabilidade: number
  patrimonio: number
  valorPatrimonial: number
  pVpa: number
  vpaYield: number
  vpaChange: number
  vpaRentM: number
  vpaRent: number
  vacanciaFisica: number
  vacanciaFinanceira: number
  ativos: number
}

function formattDecimalNumber(numberStr: string) {
  return numberStr.replaceAll('.', '').replaceAll(',', '.')
}

function removePercentStr(str: string) {
  return str.replaceAll(' %', '')
}

export default function typeAllObjects(allObjects: StringProperties[]) {
  const objectsDotsOrganized = allObjects.map((item) => {
    return {
      ...item,
      liquidezmediadiaria: formattDecimalNumber(item.liquidezmediadiaria),
      patrimonio: formattDecimalNumber(item.patrimonio),
      valor: formattDecimalNumber(item.valor),
      vpa: formattDecimalNumber(item.vpa),
    }
  })

  const objectsWithJustDots = objectsDotsOrganized.map(
    (item: StringProperties) => {
      return {
        ...item,
        pvp: item.pvp.replaceAll(',', '.'),
        dividendo: item.dividendo.replaceAll(',', '.'),
        yeld: item.yeld.replaceAll(',', '.'),
        soma_yield_3m: item.soma_yield_3m.replaceAll(',', '.'),
        soma_yield_6m: item.soma_yield_6m.replaceAll(',', '.'),
        soma_yield_12m: item.soma_yield_12m.replaceAll(',', '.'),
        soma_yield_ano_corrente: item.soma_yield_ano_corrente.replaceAll(
          ',',
          '.',
        ),
        media_yield_3m: item.media_yield_3m.replaceAll(',', '.'),
        media_yield_6m: item.media_yield_6m.replaceAll(',', '.'),
        media_yield_12m: item.media_yield_12m.replaceAll(',', '.'),
        variacao_cotacao_mes: item.variacao_cotacao_mes.replaceAll(',', '.'),
        rentabilidade: item.rentabilidade.replaceAll(',', '.'),
        rentabilidade_mes: item.rentabilidade_mes.replaceAll(',', '.'),
        p_vpa: item.p_vpa.replaceAll(',', '.'),
        vpa_yield: item.vpa_yield.replaceAll(',', '.'),
        vpa_change: item.vpa_change.replaceAll(',', '.'),
        vpa_rent: item.vpa_rent.replaceAll(',', '.'),
        vpa_rent_m: item.vpa_rent_m.replaceAll(',', '.'),
      }
    },
  )

  const objectsFormatted = objectsWithJustDots.map((item) => ({
    nome: item.post_title,
    setor: item.setor,
    valor: Number(item.valor),
    liquidezMediaDiaria: Number(item.liquidezmediadiaria),
    pvp: Number(item.pvp),
    dividendo: Number(item.dividendo),
    yield: Number(removePercentStr(item.yeld)),
    somaYield3m: Number(removePercentStr(item.soma_yield_3m)),
    somaYield6m: Number(removePercentStr(item.soma_yield_6m)),
    somaYield12m: Number(removePercentStr(item.soma_yield_12m)),
    mediaYield3m: Number(removePercentStr(item.media_yield_3m)),
    mediaYield6m: Number(removePercentStr(item.media_yield_6m)),
    mediaYield12m: Number(removePercentStr(item.media_yield_12m)),
    somaYieldSomaRecorrente: Number(
      removePercentStr(item.soma_yield_ano_corrente),
    ),
    variacaoCotacaoMes: Number(removePercentStr(item.variacao_cotacao_mes)),
    rentabilidadeMes: Number(removePercentStr(item.rentabilidade_mes)),
    rentabilidade: Number(removePercentStr(item.rentabilidade)),
    patrimonio: Number(item.patrimonio),
    valorPatrimonial: Number(item.vpa),
    pVpa: Number(item.p_vpa),
    vpaYield: Number(removePercentStr(item.vpa_yield)),
    vpaChange: Number(removePercentStr(item.vpa_change)),
    vpaRentM: Number(removePercentStr(item.vpa_rent_m)),
    vpaRent: Number(removePercentStr(item.vpa_rent)),
    vacanciaFisica: Number(item.v_fisica),
    vacanciaFinanceira: Number(item.v_financeira),
    ativos: Number(item.ativos),
  }))

  return objectsFormatted
}
