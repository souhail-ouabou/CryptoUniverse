import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi';
//connect api to the store
export default configureStore({ reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
}});
