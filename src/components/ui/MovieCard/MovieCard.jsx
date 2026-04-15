import { Box, Link, Rating, Stack, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <Stack>
      <RouterLink to={`/movie/${movie.kinopoiskId}`}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameOriginal}
          className={styles.img}
        />
      </RouterLink>

      <Link
        component={RouterLink}
        to={`/movie/${movie.kinopoiskId}`}
        sx={{ textAlign: 'center', maxWidth: 215 }}
      >
        {movie.nameOriginal ? movie.nameOriginal : movie.nameRu}
      </Link>

      {movie.ratingKinopoisk && (
        <Stack sx={{ alignItems: 'center' }}>
          <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
            <Box>
              <Rating
                name="read-only"
                value={movie.ratingKinopoisk / 2}
                readOnly
                precision={0.1}
              />
            </Box>
          </Tooltip>
        </Stack>
      )}
    </Stack>
  );
}
