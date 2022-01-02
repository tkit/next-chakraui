/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useMemo } from 'react'
import { Column, useSortBy, useTable } from 'react-table'
import { Stage } from '../interfaces'

type TableProps = {
  columns: Column[]
  data: Stage[]
}

export const DataTable = (props: TableProps) => {
  const data = useMemo(() => props.data, [props.data])
  const columns = useMemo((): Column[] => props.columns, [props.columns])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Stage>({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)

          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
