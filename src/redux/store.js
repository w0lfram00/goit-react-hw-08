import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filterReduser } from "./filters/slice";
import { authReduser } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root-auth",
  storage,
  version: 1,
  whitelist: "token",
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    contacts: contactsReduser,
    filter: filterReduser,
  },
});

export const persistor = persistStore(store);
