import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import cartReducer from './slices/cartSlice';
import globalReducer from './slices/globalSlice';
const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
};

const globalPersistConfig = {
  key: 'global',
  storage: AsyncStorage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedGlobalReducer = persistReducer(globalPersistConfig, globalReducer);
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    global: persistedGlobalReducer,
  },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;