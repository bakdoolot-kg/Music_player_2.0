import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f6265d1113mshf900f499b483a96p120a85jsncfcd6c2697db');

      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopCharts: build.query({ query: () => 'v1/charts/world' }),
    getSongsByGenre: build.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongDetails: build.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: build.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
    getArtistDetails: build.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: build.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: build.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
