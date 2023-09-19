import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { authenticated: false, authToken: "" };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.authenticated = true;
      state.authToken = action.payload;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

const initialProductDetailsState = {
  details: [],
  updatedImagesMessage: false,
  updatedImagesCounter: 0,
  updatedDetailsMessage: false,
  updatedDetailsCounter: 0,
  deletedProductsMessage: false,
  deletedProductsCounter: 0,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialProductDetailsState,
  reducers: {
    fetchDetails(state, action) {
      state.details = action.payload;
    },
    updateImageMessage(state, action) {
      state.updatedImagesMessage = true;
      state.updatedImagesCounter++;
    },
    updateDetailMessage(state, action) {
      state.updatedDetailsMessage = true;
      state.updatedDetailsCounter++;
    },
    deleteProductMessage(state, action) {
      state.deletedProductsMessage = true;
      state.deletedProductsCounter++;
    },
  },
});

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    productDetails: productDetailsSlice.reducer,
  },
});

export const authenticationActions = authenticationSlice.actions;

export const productDetailsActions = productDetailsSlice.actions;

export default store;
