import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleDefinition = () => (
  <Table definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>WILAYAH</Table.HeaderCell>
        <Table.HeaderCell>01. Ir. H. JOKO WIDODO</Table.HeaderCell>
        <Table.HeaderCell>02. H. PRABOWO SUBIANTO</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>KOTA BOGOR</Table.Cell>
        <Table.Cell>500</Table.Cell>
        <Table.Cell>1500</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>DESA BOGOR</Table.Cell>
        <Table.Cell>400</Table.Cell>
        <Table.Cell>1600</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleDefinition
