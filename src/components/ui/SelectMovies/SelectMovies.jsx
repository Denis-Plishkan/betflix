import { resetQuery, selectQuery } from '@/features/currentQuerySlice';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  genreId,
}) {
  const dispatch = useDispatch();
  const ordersList = [
    { title: 'by rating', value: 'RATING' },
    { title: 'by estimates', value: 'NUM_VOTE' },
  ];

  const yearsList = new Array(60).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' }, mb: 2, gap: 0.5 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Sort</InputLabel>
        <Select
          value={order}
          onChange={e => dispatch(selectQuery({ order: e.target.value }))}
        >
          {ordersList.map(order => (
            <MenuItem key={order.title} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Country</InputLabel>
        <Select
          value={countries}
          onChange={e => dispatch(selectQuery({ countries: e.target.value }))}
        >
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Genre</InputLabel>
        <Select
          value={genreId}
          onChange={e => dispatch(selectQuery({ genreId: e.target.value }))}
        >
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Year</InputLabel>
        <Select
          value={year}
          onChange={e => dispatch(selectQuery({ year: e.target.value }))}
        >
          {yearsList.map(year => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button
          sx={{ height: '100%' }}
          variant="outlined"
          startIcon={<CloseIcon />}
          onClick={() => dispatch(resetQuery())}
        >
          reset
        </Button>
      </Box>
    </Stack>
  );
}
