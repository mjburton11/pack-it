import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import './App.css';
import { EditInventory, Item } from './edit-inventory';

const defaultItem = { name: '', quantity: 0 };

export function Inventory() {
  const boldFont = { fontWeight: 'bold' };

  const [items, setItems] = useState<Item[]>([
    { name: 't-shirt', quantity: 3 },
    { name: 'pants', quantity: 6 },
  ]);
  const [editItem, setEditItem] = useState<Item>(defaultItem);
  const [itemIndex, setItemIndex] = useState<number | null>(null);

  const updateItem = (patch: Partial<Item>) => {
    setEditItem({ ...editItem, ...patch });
  };
  const saveNewItem = () => {
    if (itemIndex !== null) {
      setItems(
        items.map((item, index) => (index === itemIndex ? editItem : item))
      );
    } else {
      setItems([...items, editItem]);
    }
    setEditItem(defaultItem);
    setItemIndex(null);
  };

  const deleteItem = (index: number) => {
    const temp = [...items];
    temp.splice(index, 1);
    setItems(temp);
  };

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
            {items.map((row, i) =>
              itemIndex === i ? (
                <EditInventory
                  key={i.toString()}
                  name={editItem.name}
                  quantity={editItem.quantity}
                  updateItem={updateItem}
                  saveItem={saveNewItem}
                />
              ) : (
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
                    <IconButton
                      size="small"
                      onClick={() => {
                        setEditItem(row);
                        setItemIndex(i);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" onClick={() => deleteItem(i)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
            <EditInventory
              key="newItem"
              name={itemIndex === null ? editItem.name : defaultItem.name}
              quantity={
                itemIndex === null ? editItem.quantity : defaultItem.quantity
              }
              saveItem={saveNewItem}
              updateItem={updateItem}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
