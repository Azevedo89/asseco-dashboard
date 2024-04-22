import { saveRoutesSlice } from '@asseco-web/reducers/reducers'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootApi from 'api/root.api'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { expiredToken } from './middlewares/expiredToken'
import authReducer from './reducers/auth.reducer'

const appReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  [saveRoutesSlice.name]: saveRoutesSlice.reducer,
  auth: authReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [rootApi.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rootApi.middleware, expiredToken),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof appReducer>

export default store

setupListeners(store.dispatch)
