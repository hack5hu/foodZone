import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  id?: number;
  email: string;
  pass: string;
}

interface GlobalState {
  isLogin: boolean;
  userDetails: Record<string, any>;
  LoginUserDetails: UserDetails[];
}

const initialState: GlobalState = {
  isLogin: false,
  userDetails: {},
  LoginUserDetails: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserDetails: (state, action: PayloadAction<Record<string, any>>) => {
      state.userDetails = action.payload;
    },
    setLoginUserDetails: (state, action: PayloadAction<UserDetails>) => {
      const exists = state.LoginUserDetails.find(
        user => user.email === action.payload.email
      );
      if (exists) {
        throw new Error('User already exists'); // You can also dispatch an error flag instead
      }
      state.LoginUserDetails.push(action.payload);
    },
    validateLogin: (state, action: PayloadAction<UserDetails>) => {
      const found = state.LoginUserDetails.find(
        user =>
          user.email === action.payload.email &&
          user.pass === action.payload.pass
      );
      if (found) {
        state.isLogin = true;
        state.userDetails = found;
      } else {
        throw new Error('Invalid email or password');
      }
    },
    logout: (state) => {
      state.isLogin = false;
      state.userDetails = {};
    },
  },
});

export const { setIsLogin, setUserDetails, setLoginUserDetails,logout,validateLogin } = globalSlice.actions;
export default globalSlice.reducer;