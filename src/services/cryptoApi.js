 import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ab43c038e6msh1d167f7d8658122p1ad9cfjsn658814799aea'
 }
 const baseUrl = 'https://coinranking1.p.rapidapi.com';
 

 //add the url ans the headers to our call
 const createRequest = (url) => ({url, headers: cryptoApiHeaders})
 
 export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
        query: (id) => createRequest(`/coin/${id}`)
      })
    }),
  });
//create hook (use***Query) to get all data for ypur query
  export const { useGetCryptosQuery,useGetCryptoDetailsQuery } = cryptoApi; 