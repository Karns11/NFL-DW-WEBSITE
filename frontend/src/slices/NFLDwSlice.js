import { NFLDW_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//mutation means it is NOT going to make a get request
//this is for the server stuff
export const NFLApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerDim: builder.query({
      query: () => ({
        url: `${NFLDW_URL}/playerdim`,
      }),
    }),
    getDwTables: builder.query({
      query: () => ({
        url: `${NFLDW_URL}/tables`,
      }),
    }),
  }),
});

export const { useGetPlayerDimQuery, useGetDwTablesQuery } = NFLApiSlice;
