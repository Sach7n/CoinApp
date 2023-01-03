import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CoinRanking_coreAPI = createApi({
    reducerPath:"spotifyCoreApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://coinranking1.p.rapidapi.com",
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key', "3019f2838bmshb226de6aecdfcadp19f7a0jsne947b0077cc0");
            return headers
        }
    }),
    endpoints:(builder)=>({
        getTopCoins:builder.query({query:(limit)=>({url:'/coins',params: { limit: limit }})})
    })
})

export const {useGetTopCoinsQuery} = CoinRanking_coreAPI;