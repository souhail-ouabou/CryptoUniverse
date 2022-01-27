import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi'
//connect api to the store
export default configureStore({ reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer,
}});
