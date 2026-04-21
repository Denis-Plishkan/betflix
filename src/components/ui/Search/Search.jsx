import { setSearchQuery } from '@/features/searchQuerySlice';
import { useGetFilmsQuery } from '@/services/kinopoiskApi';
import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    state => state.searchQuerySlice,
  );

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);

    return () => clearTimeout(setTimeoutId);
  }, [input]);

  const { data, isFetching } = useGetFilmsQuery({
    countries,
    genreId,
    order,
    type,
    year,
    page,
    keyword,
  });

  return (
    <Autocomplete
      freeSolo
      loading={isFetching}
      sx={{ width: '300px', background: 'rgba(255,255,255,0.15)' }}
      options={data?.items || []}
      getOptionLabel={option =>
        typeof option === 'string'
          ? option
          : option.nameOriginal || option.nameRu
      }
      getOptionKey={option => option.kinopoiskId}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      onChange={(_, value) => {
        if (value && typeof value !== 'string') {
          navigate(`/movie/${value.kinopoiskId}`);
        }
      }}
      renderInput={params => (
        <TextField {...params} label="Search" size="small" />
      )}
    />
  );
}
