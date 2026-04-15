import MoviesList from '@/components/ui/MoviesList';
import { TOP_LISTS } from '@/constatnts';
import { useGetFilmsTopQuery } from '@/services/kinopoiskApi';
import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MoviesListTop() {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const movieType = TOP_LISTS.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (error) return <p>Some error</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Stack sx={{ flexDirection: 'row', mt: 2, mb: 2 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h4">{movieType.title}</Typography>
      </Stack>

      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
