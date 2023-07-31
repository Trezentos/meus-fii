import React from 'react'
import { TableContainer } from './styles'
import { FiiType } from '@/utils/typeAllObjects'

interface TableProps {
  data: FiiType[]
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>FII</th>
          <th>Dividend Yield (%)</th>
          <th>Dividend Yield 6M (%)</th>
          <th>Dividend Yield 1 ano (%)</th>
          <th>P/VPA</th>
          <th>Liquidez</th>
          <th>Renda Recorrente (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nome}</td>
            <td>{row.yield}</td>
            <td>{row.somaYield6m}</td>
            <td>{row.somaYield12m}</td>
            <td>{row.pVpa}</td>
            <td>{row.liquidezMediaDiaria}</td>
            <td>{row.somaYieldSomaRecorrente}</td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}
