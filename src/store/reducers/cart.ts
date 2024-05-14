import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type cartState = {
  items: Game[]
}

const initialState: cartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
