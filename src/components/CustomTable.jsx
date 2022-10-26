import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import { useContext, useState } from 'react'
import Card from './common/Card'
import CardTitle from './common/CardTitle'
import Status from './common/Status'
import { tableRows } from '../fakeData'
import { ThemeContext } from '../context/ThemeContext'
import colors from 'tailwindcss/colors'

const tableHeader = [
  'Tracking ID',
  'Product',
  'Customer',
  'Date',
  'Amount',
  'Payment method',
  'Status',
]

export default function CustomTable() {
  const { isDark } = useContext(ThemeContext)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <Card className="w-full">
      <CardTitle>Latest transactions</CardTitle>
      <div className="mt-4 rounded shadow">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeader.map((cell, idx) => (
                  <TableCell key={idx}>
                    <span className="font-semibold text-gray-600 dark:text-gray-200">
                      {cell}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      {row.id}
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      <div className="flex items-center gap-2">
                        <img src={row.productImg} alt="" className="rounded-full" />
                        <span>{row.productName}</span>
                      </div>
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      {row.customer}
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      {row.date}
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      {row.amount}
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      <span className="capitalize">{row.paymentMethod}</span>
                    </TableCell>
                    <TableCell style={isDark ? { color: colors.gray[200] } : {}}>
                      <Status status={row.status}>{row.status}</Status>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={isDark ? { color: colors.gray[200] } : {}}
        />
      </div>
    </Card>
  )
}
