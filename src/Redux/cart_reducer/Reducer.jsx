const InitialState = {
  cart_data:[]
}

const reducer = (currentState = InitialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case "Add_cart":
      return{
        ...currentState,
        cart_data: [...currentState.cart_data, payload]
      }
  
    default:
      return currentState;
  }
}

export { reducer };