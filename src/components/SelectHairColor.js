import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'
import { brastlewarkFilterHairColor } from '../store/brastlewark/actions'
export default function BasicSelect() {
  const dispatch = useDispatch()
  const state = useSelector( state => {
    const colors =  state.map((item)=> item.hair_color)
    return colors.filter((el, index)=> colors.indexOf(el) === index)
  });
  const [color, setColor] = React.useState('');

  const filterByHairColor = (e)=>{ 
    setColor(e.target.value)
    dispatch(brastlewarkFilterHairColor(e.target.value))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={filterByHairColor}
        >
          {
            state.map((item, index)=>(
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
