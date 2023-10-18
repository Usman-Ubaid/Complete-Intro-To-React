import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Animal,
  BreedListAPIResponse,
  Pet,
  PetAPIResponse,
} from "./APIResponsesTypes";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({ url: "pets", params: { id } }),
      transformResponse: (response) => {
        return response as PetAPIResponse;
      },
    }),
    getBreeds: builder.query({
      query: (animal) => ({ url: "breeds", params: { animal } }),
      transformResponse: (response) => {
        return response as BreedListAPIResponse;
      },
    }),
    search: builder.query({
      query: ({ animal, location, breed }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
    }),
  }),
});

export const { useGetPetQuery, useGetBreedsQuery, useSearchQuery } = petApi;
