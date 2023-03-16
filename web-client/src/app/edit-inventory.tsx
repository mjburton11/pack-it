import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

export type Item = {
  name: string
  quantity: number
}

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export type EditInventoryProps = {
  name: string
  quantity: number
  saveItem: () => void
  updateItem: (patch: Partial<Item>) => void
}

export function EditInventory({
  name,
  quantity,
  saveItem,
  updateItem,
}: EditInventoryProps) {
  const [invalid, setInvalid] = useState({ name: false, quantity: false })
  const checkIsValid = () => {
    if (name !== '' && quantity !== 0) {
      saveItem()
      setInvalid({ name: false, quantity: false })
    }
    setInvalid({
      name: name === '',
      quantity: quantity === 0,
    })
  }

  return (
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
          onChange={(e: ChangeEvent) => updateItem({ name: e.target.value })}
          onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && checkIsValid()}
          value={name}
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
          onChange={(e: ChangeEvent) =>
            updateItem({ quantity: +e.target.value })
          }
          onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && checkIsValid()}
          value={quantity || ''}
        ></TextField>
      </TableCell>
      <TableCell />
    </TableRow>
  )
}
