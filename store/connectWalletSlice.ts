import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Slice: a collection of Redux reducer logic and actions for a single feature in our app.

export interface ConnectWalletState {
  connectWalletState: boolean;
}

// Initial state
const initialState: ConnectWalletState = {
  connectWalletState: false,
};

// Slice
export const connectWalletSlice = createSlice({
  name: "connectWallet",
  initialState,
  reducers: {
    // Action to set connected wallet
    setConnectWalletState(state, action) {
      state.connectWalletState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.connectWallet,
      };
    },
  },
});

export const { setConnectWalletState } = connectWalletSlice.actions;

export const selectConnectWalletState = (state: AppState) =>
  state.connectWallet.connectWalletState;

export default connectWalletSlice.reducer;
