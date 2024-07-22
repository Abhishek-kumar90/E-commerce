const initialState = {
    items: [],
    total: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      case 'REMOVE_FROM_CART':
        const updatedItems = state.items.filter(item => item.id !== action.payload);
        const removedItem = state.items.find(item => item.id === action.payload);
        return {
          ...state,
          items: updatedItems,
          total: state.total - removedItem.price,
        };
      case 'CLEAR_CART':
        return initialState;
      default:
        return state;
    }
  };
  
  export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
  
  export default cartReducer;
  