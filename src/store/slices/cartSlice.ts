import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
    },

    decrementItemFromCart: (state, action: PayloadAction<string>) => {
      const existing = state.cartItems.find(item => item.id === action.payload);
      if (existing) {
        existing.quantity -= 1;
        state.totalPrice -= existing.price;
        if (existing.quantity === 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      }
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const existing = state.cartItems.find(item => item.id === action.payload);
      if (existing) {
        state.totalPrice -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },

  },
});
export const {
  addItemToCart,
  decrementItemFromCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;