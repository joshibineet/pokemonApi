import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../api/apiQuery';


export const makeStore = () => {
    return configureStore({
        reducer: {
          baseApi: baseApi.reducer
        },
        middleware(getDefaultMiddleware){
            return getDefaultMiddleware().concat(baseApi.middleware)
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']