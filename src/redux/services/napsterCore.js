import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const napsterCoreApi = createApi({
  reducerPath: 'napsterCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.napster.com/v2.2/',
    prepareHeaders: (headers) => {
      headers.set('apikey', import.meta.env.VITE_APP_NAPSTER_API_KEY);

      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopTracks: build.query({ query: () => 'tracks/top?limit=20' }),
  }),
});

export const {
  useGetTopTracksQuery,
} = napsterCoreApi;
