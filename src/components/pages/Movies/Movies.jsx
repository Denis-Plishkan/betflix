import ErrorMessage from '@/components/ui/ErrorMessage';
import useMoviesQuery from '@/hooks/useMoviesQuery';
import AcroolCarousel, { AcroolSlideImage } from '@acrool/react-carousel';
import { Box, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import MoviesSkeleton from './MoviesSkeleton';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  if (isLoading) return <MoviesSkeleton />;

  if (hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <AcroolSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const carouselArr = [
    {
      title: 'Popular movies',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: 'Best movies',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Movies',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items),
    },
    {
      title: 'Serials',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Cartoons',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {carouselArr.map(item => (
        <Stack key={item.title}>
          <Link
            sx={{ mt: 2, mb: 2 }}
            variant="h4"
            component={RouterLink}
            to={item.url}
          >
            {item.title}
          </Link>
          <AcroolCarousel
            data={item.data}
            slidesPerView={1}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={2000}
            moveTime={1000}
            breakpoints={{
              576: {
                isEnableAutoPlay: false,
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
                height: 250,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </Box>
  );
}
