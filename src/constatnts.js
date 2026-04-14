import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  LiveTv,
  MenuBook,
  MoodBad,
  Pool,
  StarPurple500,
  VolunteerActivism,
  LocalMovies,
  Reorder,
  Fort,
};

export const TOP_LISTS = [
  {
    title: 'Top 100 Popular Movies',
    icon: 'AutoAwesome',
    url: '/popular',
  },

  {
    title: 'Top 250 Best Movies',
    icon: 'StarPurple500',
    url: '/best',
  },
  {
    title: 'Vampires',
    icon: 'Bloodtype',
    url: '/vampire',
  },
  {
    title: 'Comics',
    icon: 'MenuBook',
    url: '/comics',
  },
  {
    title: 'Family',
    icon: 'FamilyRestroom',
    url: '/family',
  },
  {
    title: 'Romance',
    icon: 'VolunteerActivism',
    url: '/romantic',
  },
  {
    title: 'Zombies',
    icon: 'MoodBad',
    url: '/zombie',
  },
  {
    title: 'Disasters',
    icon: 'Pool',
    url: '/catastrophe',
  },
  {
    title: 'Popular TV Series',
    icon: 'LiveTv',
    url: '/popular-serials',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Movies',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'TV Series',
    icon: 'Reorder',
    url: '/serials',
  },
  {
    title: 'Cartoons',
    icon: 'Fort',
    url: '/cartoons',
  },
];
