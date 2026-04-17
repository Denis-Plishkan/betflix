import { Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function MoviesListSkeleton() {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="32px"
        width="215px"
        sx={{ mt: 2, mb: 2 }}
      />
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <Stack key={index}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="322px"
                width="215px"
              />
              <Skeleton animation="wave" variant="text" width={120} />
              <Skeleton animation="wave" variant="text" width={120} />
            </Stack>
          ))}
      </Stack>
    </>
  );
}
