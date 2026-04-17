import { Skeleton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

export default function MoviesListMainSkeleton() {
  const isMobile = useMediaQuery('max-width:600px)');
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
          flexDirection: { sm: 'column', md: 'row' },
          mb: 2,
          mt: 2,
          gap: 0.5,
        }}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton animation="wave" variant="rounded" width={132} height={40} />
      </Stack>
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
