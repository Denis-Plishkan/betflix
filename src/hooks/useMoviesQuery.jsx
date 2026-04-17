import { TOP_LISTS } from '@/constatnts';
import { useGetFilmsQuery, useGetFilmsTopQuery } from '@/services/kinopoiskApi';
import { useSelector } from 'react-redux';

export default function useMoviesQuery() {
  const { page, countries, order, year } = useSelector(
    state => state.currentQuery,
  );
  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });

  const responseFilms = useGetFilmsQuery({
    type: 'FILM',
    countries,
    order,
    genreId: '1',
    year,
    page,
  });

  const responseSerials = useGetFilmsQuery({
    type: 'TV_SERIES',
    countries,
    order,
    genreId: '1',
    year,
    page,
  });

  const responseCartoons = useGetFilmsQuery({
    type: 'FILM',
    countries,
    order,
    genreId: '18',
    year,
    page,
  });

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching;

  const hasError =
    responsePopular.error ||
    responseBest.error ||
    responseFilms.error ||
    responseSerials.error ||
    responseCartoons.error;

  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  };
}
