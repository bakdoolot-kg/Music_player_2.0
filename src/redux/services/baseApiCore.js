import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('Content-type', 'application/json');

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllSongs: build.query({ query: () => 'songs/' }),
    getSongDetails: build.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
  }),
});

export const {
  useGetAllSongsQuery,
  useGetSongDetailsQuery,
} = baseApi;
