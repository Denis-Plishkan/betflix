import MovieCard from '@/components/ui/MovieCard';
import { Pagination, Stack } from '@mui/material';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  console.log(movies);

  return (
    <Stack sx={{ flexDirection: 'column', gap: 2 }}>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack sx={{ alignItems: 'center' }}>
        <Pagination
          count={totalPages}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </Stack>
  );
}
