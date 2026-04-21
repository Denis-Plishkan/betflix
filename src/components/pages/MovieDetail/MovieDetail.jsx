import ErrorMessage from '@/components/ui/ErrorMessage';
import MovieCard from '@/components/ui/MovieCard';
import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
  useGetVideosQuery,
} from '@/services/kinopoiskApi';
import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const responseVideo = useGetVideosQuery(id);

  const responseFilm = useGetFilmQuery(id);
  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id);
  const responseStaff = useGetStaffQuery(id);

  if (responseFilm.isLoading || responseStaff.isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  console.log('Videos response:', responseVideo);
  console.log('Videos data:', responseVideo.data);

  if (responseFilm.error || responseStaff.error) {
    return <ErrorMessage />;
  }
  return (
    <>
      <Grid container spacing={2} sx={{ mt: { md: 2 } }}>
        <Grid size={{ sm: 12, md: 4 }}>
          <img
            src={responseFilm.data.posterUrlPreview}
            alt={responseFilm.data.nameOriginal}
            width="100%"
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Grid container>
            <Grid size={2}>
              <Button
                startIcon={<ArrowBack />}
                size="large"
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid size={4}>
              <Typography variant="h5" sx={{ alignContent: 'center' }}>
                {responseFilm.data.nameOriginal}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={6}>
              <Typography>Year</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{responseFilm.data.year}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography>Country</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data.countries.map(({ country }) => (
                <Typography gutterBottom key={country}>
                  {country}
                </Typography>
              ))}
            </Grid>

            <Grid size={6}>
              <Typography>Genre</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data.genres.map(({ genre }) => (
                <Typography gutterBottom key={genre}>
                  {genre}
                </Typography>
              ))}
            </Grid>

            <Grid size={6}>
              <Typography>Directors</Typography>
            </Grid>
            <Grid size={6}>
              {responseStaff.data
                .filter(el => el.professionText === 'Режиссеры')
                .map(({ nameEn }) => (
                  <Typography gutterBottom key={nameEn}>
                    {nameEn}
                  </Typography>
                ))}
            </Grid>

            <Grid size={6}>
              <Typography>Time</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {responseFilm.data.filmLength} min
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography>Description</Typography>
            </Grid>
            <Grid size={12}>
              <Typography>
                {responseFilm.data.description
                  ? responseFilm.data.description
                  : 'no description'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ sm: 12, md: 2 }}>
          <Typography variant="h6">Starring</Typography>
          {responseStaff.data
            .filter(el => el.professionText === 'Актеры')
            .slice(0, 15)
            .map(({ staffId, nameEn, nameRu }) => (
              <Typography key={staffId}>{nameEn || nameRu}</Typography>
            ))}
        </Grid>
      </Grid>

      {responseVideo.data?.length > 0 && (
        <Box>
          <Typography variant="h5" sx={{ textAlign: 'center', mt: 2 }}>
            Watch trailer
          </Typography>
          <iframe
            width="100%"
            height="400"
            src={`${responseVideo.data[0].url.replace('watch?v=', 'embed/')}?controls=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      )}

      {responseSequelsAndPrequels.data && (
        <Stack sx={{ alignItems: 'center' }}>
          <Typography gutterBottom variant="h5">
            Sequels and Prequels
          </Typography>
          <Stack
            direction="row"
            sx={{ gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {responseSequelsAndPrequels.data.map(el => (
              <MovieCard key={el.filmId} movie={el} />
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
}
