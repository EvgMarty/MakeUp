import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      // Проверяем, существует ли объект с таким id в массиве
      const existingItem = state.find((item) => item.id === action.payload.id);

      // Если объект уже существует удаляем
      if (existingItem) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    },
  },
});

// Экспортируем действия (actions) из слайса
export const { setCart } = cartSlice.actions;

// єкспорт состояния из Redux
export const selectCart = (state) => state.cart;

// Экспортируем редуктор из слайса
export default cartSlice.reducer;
