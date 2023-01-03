import { configureStore } from '@reduxjs/toolkit';

import { CoinRanking_coreAPI } from "./services/CoinRanking_core";

export const store = configureStore({
    reducer:{
        [CoinRanking_coreAPI.reducerPath]:CoinRanking_coreAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoinRanking_coreAPI.middleware),
})