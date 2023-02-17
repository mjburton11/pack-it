import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton, TextField } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState } from 'react'
import './App.css'

type Item = {
  name: string
  quantity: number
}

const defaultItem = { name: '', quantity: 0 }

export function Inventory() {
  const boldFont = { fontWeight: 'bold' }

  const [items, setItems] = useState<Item[]>([
    { name: 't-shirt', quantity: 3 },
    { name: 'pants', quantity: 6 },
  ])
  const [newItem, setNewItem] = useState<Item>(defaultItem)
  const [invalid, setInvalid] = useState({ name: false, quantity: false })

  const updateNewName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, name: event.target.value })
  }
  const updateNewQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      ...newItem,
      quantity: +event.target.value,
    })
  }
  const saveNewItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (newItem.name !== '' && newItem.quantity !== 0) {
        setItems([...items, newItem])
        setNewItem(defaultItem)
        setInvalid({ name: false, quantity: false })
      }
      setInvalid({
        name: newItem.name === '',
        quantity: newItem.quantity === 0,
      })
    }
  }

  const deleteItem = (index: number) => {
    const temp = [...items]
    temp.splice(index, 1)
    setItems(temp)
  }

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
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, i) => (
              <TableRow
                key={i.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell
                  align="center"
                  sx={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" onClick={() => deleteItem(i)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  sx={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                  }}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    disableUnderline: !invalid.name,
                    sx: {
                      fontSize: '14px',
                      fontStyle: 'italic',
                    },
                  }}
                  id="new-item"
                  placeholder="New item"
                  size="small"
                  margin="none"
                  type="text"
                  error={invalid.name}
                  onChange={updateNewName}
                  onKeyDown={saveNewItem}
                  value={newItem.name}
                ></TextField>
              </TableCell>
              <TableCell align="right">
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: !invalid.quantity,
                    sx: {
                      fontSize: '14px',
                      fontStyle: 'italic',
                      direction: 'rtl',
                    },
                  }}
                  error={invalid.quantity}
                  id="new-quantity"
                  placeholder="Quantity"
                  size="small"
                  margin="none"
                  type="number"
                  onChange={updateNewQuantity}
                  onKeyDown={saveNewItem}
                  value={newItem.quantity || ''}
                ></TextField>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}
