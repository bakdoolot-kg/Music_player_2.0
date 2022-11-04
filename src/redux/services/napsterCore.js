import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const napsterCoreApi = createApi({
  reducerPath: 'napsterCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.napster.com/v2.0',
    prepareHeaders: (headers) => {
      headers.set('client_id', import.meta.env.VITE_APP_NAPSTER_API_KEY);

      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopTracks: build.query({ query: () => '/tracks/top?limit=5' }),
  }),
});

export const {
  useGetTopTracksQuery,
} = napsterCoreApi;
