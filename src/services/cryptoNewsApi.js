import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'ab43c038e6msh1d167f7d8658122p1ad9cfjsn658814799aea'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


//add the url ans the headers to our call
const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
   reducerPath: 'cryptoNewsApi',
   baseQuery: fetchBaseQuery({ baseUrl}),
   endpoints: (builder) => ({
     getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
     }),
   }),
 });
 //create hook (use***Query) to get all data for ypur query
 export const { useGetCryptoNewsQuery } = cryptoNewsApi; 