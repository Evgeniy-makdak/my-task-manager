import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
} from '@mui/material';
import SelectChangeEvent  from '@mui/material/Select';

export const MainPage: React.FC = () => {
  const [status, setStatus] = React.useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Статус</InputLabel>
        <Select
          value={status}
          label="Статус"
          onChange={handleChange}
        >
          <MenuItem value="all">Все</MenuItem>
          <MenuItem value="closed">Закрытые</MenuItem>
          <MenuItem value="inProgress">В процессе</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Новая задача"
        variant="outlined"
        placeholder="Добавьте новую задачу..."
      />
    </Box>
  );
};
