import styled from 'styled-components'

export const TableContainer = styled.table`
  width: 80%;
  border-collapse: collapse;
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  tr {
    background-color: lightgray;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    background-color: #4caf50;
    color: white;
  }
`
