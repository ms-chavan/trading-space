import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { STOCKS } from '../../constants/alpha-vantage';
import './Toolbar.css';

export const Toolbar = (props: any) => {

    const [selectedStock, setSelectedStock] = React.useState(props.selectedStock);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedStock(event.target.value as string);
        props.onSelectedStockChange(event.target.value);
    };

    return(
        <Box sx={{ minWidth: 120 }} className='toolbarContainer'>
            <FormControl>
        <InputLabel id="demo-simple-select-label">Stock</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedStock}
          label="Stock"
          onChange={handleChange}
        >
          {
          STOCKS.map((stock) => (
            <MenuItem value={stock+'.BSE'}>{stock}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
        </Box>
    )
}