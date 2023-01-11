import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import './App.css'

export function Inventory() {
  const boldFont = { fontWeight: 'bold' }
  return (
    <main className="pi-page">
      <h1 className="pi-header">Inventory </h1>
      <TableContainer className="pi-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={boldFont}>Item</TableCell>
              <TableCell sx={boldFont} align="right">
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}

function createData(name: string, quantity: number) {
  return { name, quantity }
}

const rows = [createData('t-shirt', 4), createData('pants', 4)]
